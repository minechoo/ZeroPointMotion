import Head from 'next/head';
import axios from 'axios';
import Swiper from '@/components/organisms/Swiper/Swiper';

export default function Home({ flickr }) {
	console.log(flickr);
	return (
		<>
			<Head>
				<title>Main Page</title>
			</Head>

			<main>
				<Swiper recipe={flickr.slice(0, 7)} />
			</main>
		</>
	);
}

export async function getStaticProps(opt) {
	//const list = [];
	//const opt = queryKey[1];
	const baseURL = 'https://www.flickr.com/services/rest/?format=json&nojsoncallback=1';
	const key = '86fbba2c96b5252a51879bc23af1f41e';
	const method_user = 'flickr.people.getPhotos';
	const method_group = 'flickr.groups.pools.getPhotos';
	//const method_search = 'flickr.photos.search';
	const num = 50;
	const user = '199005451@N06';
	const user_01 = '14870955@N23';
	const user_02 = '14866737@N21';
	// let url = '';
	//let url = `${baseURL}&api_key=${key}&method=${method_user}&per_page=${num}&user_id=${user}`;
	//if (opt.type === 'group01')
	let url = `${baseURL}&api_key=${key}&method=${method_group}&per_page=${num}&group_id=${user_01}`;
	// if (opt.type === 'group02')
	// 	url = `${baseURL}&api_key=${key}&method=${method_group}&per_page=${num}&group_id=${opt.user_02}`;

	const response = await axios.get(url);
	const items = response.data.photos.photo;

	return {
		props: { flickr: items },
		revalidate: 60 * 60 * 24,
	};
}
