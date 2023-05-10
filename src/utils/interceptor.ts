import axios, {
	AxiosError,
	AxiosRequestConfig,
	AxiosResponse,
	InternalAxiosRequestConfig,
} from 'axios';
import { ACCESS_TOKEN } from './constant';
import { QueryClientSingleTon } from './queryClientProvider';
import router, { useRouter } from 'next/router';
import { ROUTES } from '@/types/routes';
import { message } from 'antd';
import { useGetMe } from '@/api/account/queries';

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3002';

export const request = axios.create({
	baseURL: baseUrl,
});
const queryClient = QueryClientSingleTon();
const handleSuccess = (res: AxiosResponse) => {
	return Promise.resolve(res);
};

const handleError = async (error: AxiosError) => {
	const data = error?.response?.data as any;
	if (error.response?.status === 401) {
		const accessToken = localStorage.getItem('token');
		if (accessToken) {
			try {
				const { data } = (await axios.post(`${baseUrl}/auth/refresh-token`, {
					accessToken,
				})) as any;
				localStorage.setItem('token', data.accessToken || '');
				console.log('data', data);
			} catch (error) {
				localStorage.removeItem('token');
				message.error('your session was expired');
				queryClient.invalidateQueries(useGetMe.getKey());
				router.push(ROUTES.login);
				console.log(error);
			}
		} else {
			message.error('You need to login');
			queryClient.invalidateQueries(useGetMe.getKey());
			router.push(ROUTES.login);
		}
	}
	return Promise.reject(error);
};

request.interceptors.response.use(handleSuccess, handleError);

request.interceptors.request.use(
	(config: InternalAxiosRequestConfig) => {
		const token = localStorage.getItem('token');
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error: AxiosError) => {
		return Promise.reject(error);
	}
);
