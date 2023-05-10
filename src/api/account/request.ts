import { request } from '@/utils/interceptor';

export const getMe = async () => {
	const { data } = await request.get('users/me');
	return data;
};
