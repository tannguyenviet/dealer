import CommonLayout from '@/components/layout';
import type { AppProps } from 'next/app';
import '@/styles/global.css';
import '@/styles/antd-override.css';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { QueryClientProvider } from '@tanstack/react-query';
import { QueryClientSingleTon } from '@/utils/queryClientProvider';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
const queryClient = QueryClientSingleTon();

export default function MyApp({ Component, ...pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<CommonLayout>
					<Component {...pageProps} />
				</CommonLayout>
				{/* <ReactQueryDevtools initialIsOpen={false} /> */}
			</QueryClientProvider>
		</Provider>
	);
}
