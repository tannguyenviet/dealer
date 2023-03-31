import { Spin } from 'antd';
import React from 'react';

import styles from './styles.module.css';

const Loader = () => {
	return (
		<div className={styles.loader}>
			<Spin className={styles.spinner} tip='Loading' size='large'>
				<div className='content' />
			</Spin>
		</div>
	);
};

export default Loader;
