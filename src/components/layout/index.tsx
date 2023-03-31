import React, { FC, ReactNode, useState } from 'react';
import {
	DesktopOutlined,
	FileOutlined,
	PieChartOutlined,
	TeamOutlined,
	UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, theme } from 'antd';
import RootMenu from '../root_menu';
const { Header, Content, Footer, Sider } = Layout;

interface MyProps {
	children?: ReactNode;
}
const CommonLayout: FC<MyProps> = ({ children }) => {
	const [collapsed, setCollapsed] = useState(false);
	const {
		token: { colorBgContainer },
	} = theme.useToken();
	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Sider
				collapsible
				collapsed={collapsed}
				onCollapse={(value) => setCollapsed(value)}
			>
				<div
					style={{
						height: 32,
						margin: 16,
						background: 'rgba(255, 255, 255, 0.2)',
					}}
				/>
				<RootMenu />
			</Sider>
			<Layout className='site-layout'>
				<Content>
					<div
						style={{
							padding: 24,
							height: '100%',
							background: colorBgContainer,
						}}
					>
						{children}
					</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>
					Ant Design ©2023 Created by Ant UED
				</Footer>
			</Layout>
		</Layout>
	);
};

export default CommonLayout;
