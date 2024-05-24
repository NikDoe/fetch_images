import { FormEvent, useRef } from 'react';
import { useGlobalContext } from '../hooks';

function Search() {
	const searchRef = useRef<HTMLInputElement>(null);
	const { setQuery } = useGlobalContext();

	const handleSearch = (e: FormEvent) => {
		e.preventDefault();
		const searchValue = searchRef.current?.value;

		if(!searchValue) return;

		setQuery(searchValue);
	};

	return (
		<section>
			<h1 className='title'>UNSPLASH IMAGES</h1>
			<form className='search-form'>
				<input 
					className='search-input'
					placeholder='office'
					type='text' 
					name='search'
					ref={searchRef}
				/>
				<button 
					className='btn'
					onClick={handleSearch}
				>
					Поиск
				</button>
			</form>
		</section>
	);
}

export default Search;
