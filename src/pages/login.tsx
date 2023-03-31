import { login } from '@/api/auth';
import { ROUTES } from '@/types/routes';
import { ACCESS_TOKEN } from '@/utils/constant';
import { useMutation } from '@tanstack/react-query';
import { Button, Checkbox, Form, Input, message, Typography } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useRouter } from 'next/router';
import React from 'react';

const Login = () => {
	const [form] = Form.useForm();
	const router = useRouter();
	const { mutate } = useMutation(login, {
		onSuccess(data) {
			localStorage.setItem(ACCESS_TOKEN, data.accessToken);
			message.success('Login Success');
			router.push(ROUTES.about);
		},
	});
	const onFinish = async (value: any) => {
		mutate(value);
	};
	const onFinishFailed = (value: any) => {
		console.log('failt', value);
	};
	const { Title } = Typography;
	return (
		<div>
			<Title style={{ textAlign: 'center', marginTop: '20px' }} level={2}>
				Login
			</Title>
			<Form
				form={form}
				name='basic'
				labelCol={{ span: 4 }}
				wrapperCol={{ span: 16 }}
				style={{ maxWidth: 600, margin: '0 auto' }}
				initialValues={{ remember: true }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete='off'
			>
				<Form.Item
					label='Email'
					name='email'
					rules={[{ required: true, message: 'Please input your email!' }]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					label='Password'
					name='password'
					rules={[{ required: true, message: 'Please input your password!' }]}
				>
					<Input.Password />
				</Form.Item>

				{/* <Form.Item
					name='remember'
					valuePropName='checked'
					wrapperCol={{ offset: 8, span: 16 }}
				>
					<Checkbox>Remember me</Checkbox>
				</Form.Item> */}

				<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<Button type='primary' htmlType='submit'>
						Submit
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default Login;
