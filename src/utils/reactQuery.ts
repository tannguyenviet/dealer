import { message } from 'antd';

export interface TError {
	code: number;
	msg: string;
	msg_code: string;
	message?: string;
}

export const handleErrorReactQuery = (error: TError) => {
	message.error(error.message);
};
