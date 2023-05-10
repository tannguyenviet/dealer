import { useGetMe } from '@/api/account/queries';
import DashboardPage from '@/modules/dashboard/dashboardPage';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { incrementByAmount, selectCount } from '@/store/slice/counter';
import { Button } from 'antd';

export default function Dashboard() {
	return <DashboardPage />;
}
