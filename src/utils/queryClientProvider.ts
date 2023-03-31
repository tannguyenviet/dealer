import { QueryClient } from '@tanstack/react-query';

type QueryClientType = InstanceType<typeof QueryClient>;
let instance: QueryClientType | null = null;
export const QueryClientSingleTon = () => {
	if (!instance) {
		instance = new QueryClient();
	}
	return instance;
};
