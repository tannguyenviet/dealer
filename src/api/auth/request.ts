import { request } from '@/utils/interceptor';
import { ILoginRequest } from './types';

export const login = async (params: ILoginRequest) => {
	const { data } = await request.post('/auth/login', params);
	return data;
};
