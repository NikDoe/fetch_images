import { useContext } from 'react';
import { GlobalContext } from '../context';

export const useGlobalContext = () => {
	const context = useContext(GlobalContext);

	if (context === undefined) {
		throw new Error('useContext must be inside a Provider with a value');
	}

	return context;
};