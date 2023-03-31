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

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3002';

export const request = axios.create({
	baseURL: baseUrl,
});
const queryClient = QueryClientSingleTon();
const handleSuccess = (res: AxiosResponse) => {
	return Promise.resolve(res);
};

const handleError = async (error: AxiosError) => {
	console.log(error, 'firstttttt');

	if (error.response?.status === 401) {
		console.log('zooo Errror');

		const accessToken = localStorage.getItem('token');
		console.log('accessToken', accessToken);
		if (accessToken) {
			try {
				const data = (await axios.post(`${baseUrl}/auth/refresh-token`, {
					accessToken,
				})) as any;
				localStorage.setItem('token', data.accessToken || '');
				console.log('data', data);
			} catch (error) {
				localStorage.removeItem('token');
				router.push(ROUTES.login);
				console.log(error);
			}
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
