import styles from './Swiper.module.scss';
import clsx from 'clsx';
import { Title } from '@/components/atoms/text/Title';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import { useState } from 'react';
import 'swiper/css';
import Slider from '@/components/molecules/Slider/Slider';
import Counter from '@/components/molecules/Counter/Counter';

SwiperCore.use([Autoplay]);

function SwiperWrap({ recipe, category }) {
	const [Index, setIndex] = useState(0);

	return (
		<figure className={clsx(styles.visual)}>
			<Title style={{ position: 'absolute', top: '20vh', left: '10vw', fontSize: 50, color: 'orange' }}>
				{category}
			</Title>

			<Slider data={recipe} index={Index} />
			<Counter index={Index} len={recipe.length} />

			<Swiper
				className={clsx(styles.swiper)}
				modules={[Autoplay]}
				autoplay={{ delay: 2000, disableOnInteraction: true }}
				loop={true}
				grabCursor={true}
				slidesPerView={1}
				spaceBetween={100}
				centeredSlides={true}
				breakpoints={{
					1200: {
						slidesPerView: 3,
						spaceBetween: 50,
					},
				}}
				onSlideChange={(el) => setIndex(el.realIndex)}
			>
				{recipe.map((item) => (
					<SwiperSlide key={item.id} className={clsx(styles.swiperSlide)}>
						{({ isActive, isPrev, isNext }) => {
							return (
								<div className={clsx(isActive && styles.on, isPrev && styles.prev, isNext && styles.next)}>
									<Title tag={'h3'} url={`/find-recipe/${item.id}/${item.id}_${item.secret}`} type={'slogan'}>
										{item.title.length > 25 ? item.title.substr(0, 25) : item.title}
									</Title>
								</div>
							);
						}}
					</SwiperSlide>
				))}
			</Swiper>
		</figure>
	);
}

export default SwiperWrap;
