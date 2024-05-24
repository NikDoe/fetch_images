import { useQuery } from '@tanstack/react-query';
import { useGlobalContext } from '../hooks';
import axios from 'axios';

type TPhoto = {
	id: string;
	urls: {
		regular: string;
	};
	alt_description: string;
}

const URL = 'https://api.unsplash.com/search/photos?client_id=PEQYsHhWMFXVE-b6rxPZl2ELiZFl2Kqckfb2slAwnsE';

function List() {
	const { query } = useGlobalContext();

	const { data, isLoading, isError } = useQuery({
		queryKey: ['photos', query],
		queryFn: async () => {
			const result = await axios.get(`${URL}&query=${query}`);
			return result.data;
		}
	});

	if(isLoading) {
		return <h1>Загрузка...</h1>;
	}

	if(isError) {
		return <h1>Произошла ошибка...🤔</h1>;
	}

	const photos = data.results;
	
	return (
		<section className='image-container'>
			{photos.map((photo: TPhoto) => {
				const url = photo.urls.regular;
				return (
					<img
						src={url}
						key={photo.id}
						alt={photo.alt_description}
						className='img'
					></img>
				);
			})}
		</section>
	);
}

export default List;
