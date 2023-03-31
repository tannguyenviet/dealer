import { useGetMe } from '@/api/account/queries';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { incrementByAmount, selectCount } from '@/store/slice/counter';
import { Button } from 'antd';

export default function About() {
	const dispatch = useAppDispatch();
	const count = useAppSelector(selectCount);
	const { data } = useGetMe();
	console.log({ data });
	return (
		<div>
			<h2>About</h2>
			<p>Count {count}</p>
			<p>{data?.email}</p>
			<Button
				onClick={() => {
					dispatch(incrementByAmount(2));
				}}
			>
				Add more 2
			</Button>
		</div>
	);
}
