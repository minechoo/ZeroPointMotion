import { Title } from '@/components/atoms/text/Title';
import styles from './Footer.module.scss';
import clsx from 'clsx';
import { Text } from '@/components/atoms/text/Text';

function Footer() {
	return (
		<footer className={clsx(styles.footer)}>
			<Title style={{ fontSize: 16, color: '#777' }}>ZeroPointMotion</Title>
			<Text type={'util'} style={{ letterSpacing: 2 }}>
				2023 ZeroPointMotion All rights reserved.
			</Text>
		</footer>
	);
}

export default Footer;
