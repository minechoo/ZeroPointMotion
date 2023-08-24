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

export async function getStaticProps() {
	const list = [];

	const baseURL = 'https://www.flickr.com/services/rest/?format=json&nojsoncallback=1';
	const key = '86fbba2c96b5252a51879bc23af1f41e';
	const method_user = 'flickr.people.getPhotos';
	//const method_search = 'flickr.photos.search';
	const num = 50;
	const user = '199005451@N06';
	let url = `${baseURL}&api_key=${key}&method=${method_user}&per_page=${num}&user_id=${user}`;

	const response = await axios.get(url);
	const items = response.data.photos.photo;

	return {
		props: { flickr: items },
		revalidate: 60 * 60 * 24,
	};
}
