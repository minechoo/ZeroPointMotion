import styles from './Swiper.module.scss';
import clsx from 'clsx';
import { Title } from '@/components/atoms/text/Title';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import { useState } from 'react';
import 'swiper/css';
import Slider from '@/components/molecules/Slider/Slider';
import Counter from '@/components/molecules/Counter/Counter';
import { Text } from '@/components/atoms/text/Text';

SwiperCore.use([Autoplay]);

function SwiperWrap({ recipe, category }) {
	const [Index, setIndex] = useState(0);

	return (
		<figure className={clsx(styles.visual)}>
			<Title
				style={{ position: 'absolute', top: '20vh', left: '10vw', fontSize: 50, color: 'orange' }}
			>
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
								<div
									className={clsx(
										isActive && styles.on,
										isPrev && styles.prev,
										isNext && styles.next
									)}
								>
									<Title tag={'h3'} type={'slogan'}>
										{/* url={`/find-recipe/${item.id}`} */}
										{item.title.length > 25 ? item.title.substr(0, 25) : item.title}
									</Title>
								</div>
							);
						}}
					</SwiperSlide>
				))}
			</Swiper>

			<div className={clsx(styles.txt_ex)}>
				<Text>
					{`‘성(性) 정체성’에 관한 주제는 많은 예술가들의 관심사 중에 하나이다. 본인도 이미 오래 전부터 직간접적으로 이 주제를 다루어 왔다. 가장 대표작은 <꼬리를 문 물고기>(2002, 2007년작)이가 있고 여기서 파생된 2인무 <달에서 온 사람>(2003년)도 있다. 또한 <엘리베이터 살인사건>(2007년)에서는 몇 장면에서 부분적 소재로도 다루어졌다. 하지만 내가 바라보는 ‘성(性)’이란 성적취향의 섹슈얼리티나 정체성 혼란에서 오는 관심이 아니다. 그 근간은 칼 구스타프 융의 애니마, 애니무스를 통한 통합된 전체성 회복을 위한 구실이었고, 이는 나카자와 신이치가 말한 신화나 제의(祭儀)를 통해 동물(자연)과의 사이에 상실된 유대관계를 회복함으로써 대칭적인 관계로의 복원을 꿈꾸기 위함이었다. <Full Moon>(2008년), <야만 샤만>(2016년)에서는 이 후자를 따르고 있다.`}
					<br />
					<br />
					{`여기에는
				안드로지니 (Androgyny)>은 성(性)에 대한 다각적인 질문에서 출발하는 토크방식의 게임퍼포먼스이다.
				
				로귀노스’ 혹은 ‘안드로지니(androgyny), 안드로진(androgine)은 플라톤의 향연에 등장하여 그리스의 인간 창조 이야기를 전개하는 핵심 용어이다.
				
				로귀노스’는 그리스 신화가 설명하는 태고의 인간으로, 이 신화를 따르면 인간은 본래 남자와 여자의 양성이 한 몸을 이룬 자웅동체였다. 그러나 그는 제우스신의 진노를 받아 남자와 여자로 분리되며, 결혼을 통해 예전에 잃어버린 본래의 짝을 찾는다. 이러한 헬레니즘적 신화는 구약성서를 기반으로하는 히브리즘에는 정면 대치된다. 야훼는 남.녀를 각각 따로 창조했기 때문이다. 이런 종교관은 남성권위주의를 의심 없이 정당화하기에 현대에 이르러 페미니즘과 지속적인 충돌을 낳게 되는 근본 원인일 수 있다`}
					<br />
					<br />

					{`신화에서 페미니즘까지.
				
				화적 이야기를 패러디로 변형된 안드로지니를 성(性)에 대한 잡다한 신화적, 종교적, 문학적, 생물학적, 심리적 담론으로까지 발전시켜 본다. 하지만 여기서 멈추지 않고 또 다른 담론까지 끌어들인다. AI에 의해 기계화되는 미래. 인공수정을 넘어 영화 매트릭스에서 보듯이 기계에서 생명체를 부양한다면 그리고 다시 양성의 인간이 출현한다면?`}
				</Text>
			</div>
		</figure>
	);
}

export default SwiperWrap;
