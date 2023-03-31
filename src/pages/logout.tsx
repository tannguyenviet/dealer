import Loader from '@/components/Loader';
import { ROUTES } from '@/types/routes';
import { ACCESS_TOKEN } from '@/utils/constant';
import { QueryClientSingleTon } from '@/utils/queryClientProvider';
import { Space, Spin } from 'antd';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
const queryClient = QueryClientSingleTon();

const Logout = () => {
	const router = useRouter();
	useEffect(() => {
		setTimeout(() => {
			localStorage.removeItem(ACCESS_TOKEN);
			router.push(ROUTES.login);
			queryClient.invalidateQueries();
		}, 2000);
	}, []);

	return <Loader />;
};

export default Logout;
