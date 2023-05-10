import React from 'react';
import {
	DesktopOutlined,
	TeamOutlined,
	UserOutlined,
	LoginOutlined,
	LogoutOutlined,
	HomeOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useRouter } from 'next/router';
import { ROUTES } from '@/types/routes';
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[]
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
	} as MenuItem;
}
const items: MenuItem[] = [
	getItem('Dashboard', ROUTES.dashboard, <HomeOutlined />),
	getItem('About', ROUTES.about, <DesktopOutlined />),
	getItem('User', ROUTES.user, <UserOutlined />),
	getItem('Team', 'sub2', <TeamOutlined />, [
		getItem('Team 1', '6'),
		getItem('Team 2', '8'),
	]),
	getItem('Login', ROUTES.login, <LoginOutlined />),
	getItem('Logout', ROUTES.logout, <LogoutOutlined />),
];

const RootMenu = () => {
	const router = useRouter();
	const onClick: MenuProps['onClick'] = (e) => {
		if (router.pathname === e.key) {
			return;
		} else {
			router.push(e.key);
		}
	};
	return (
		<Menu
			onClick={onClick}
			theme='dark'
			selectedKeys={[router.pathname]}
			defaultSelectedKeys={['1']}
			mode='inline'
			items={items}
		/>
	);
};

export default RootMenu;
