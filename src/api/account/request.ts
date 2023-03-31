import { request } from '@/utils/interceptor';

export const getMe = async () => {
	const data = (await request.get('users/me')) as any;
	return data;
};
