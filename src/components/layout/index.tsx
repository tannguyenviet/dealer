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
import styles from './styles.module.css';
interface MyProps {
	children?: ReactNode;
}
const CommonLayout: FC<MyProps> = ({ children }) => {
	// const {
	// 	token: { colorBgContainer },
	// } = theme.useToken();
	return (
		<Layout hasSider>
			<Sider className={styles.layout}>
				<div className={styles.userName}>Markie</div>
				<RootMenu />
			</Sider>
			<Layout className={styles.contentLayout}>
				{/* <Header style={{ padding: 0, background: colorBgContainer }} /> */}
				<Content className={styles.content}>
					<div
						style={{
							background: 'colorBgContainer',
							minHeight: '100vh',
						}}
					>
						{children}
					</div>
				</Content>
				<Footer className={styles.footer}>
					Ant Design ©2023 Created by Ant UED
				</Footer>
			</Layout>
		</Layout>
	);
};

export default CommonLayout;
