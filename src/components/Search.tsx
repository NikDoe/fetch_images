import { FormEvent } from 'react';
import { useGlobalContext } from '../hooks';

function Search() {
	const { query, setQuery } = useGlobalContext();

	const handleSearch = (e: FormEvent) => {
		e.preventDefault();
	};

	return (
		<form>
			<input 
				type='text' 
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<button onClick={handleSearch}>
				Поиск
			</button>
		</form>
	);
}

export default Search;
