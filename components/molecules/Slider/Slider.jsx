import { Pic } from '@/components/atoms/pic/Pic';
import styles from './Slider.module.scss';
import clsx from 'clsx';

function Slider({ data, index }) {
	return (
		<article className={clsx(styles.slider)}>
			{data.map((el, idx) => (
				<Pic
					key={el.id}
					imgSrc={`https://live.staticflickr.com/${el.server}/${el.id}_${el.secret}_b.jpg`}
					className={clsx(idx === index ? styles.on : '')}
				/>
			))}
		</article>
	);
}

export default Slider;
