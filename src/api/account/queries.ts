import { createQuery } from 'react-query-kit';
import { getMe } from './request';
import { IGetMeResponse } from './types';

export const useGetMe = createQuery<IGetMeResponse>({
	primaryKey: '/me',
	queryFn: getMe,
});
