import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from 'react';

type GlobalContextState = {
	query: string;
	setQuery: Dispatch<SetStateAction<string>>;
	isDarkTheme: boolean;
	toggleTheme: () => void;
};

type Props = {
	children: ReactNode;
};

const LOCAL_STORAGE_DARK_MODE = 'dark-mode-theme';

export const GlobalContext = createContext<GlobalContextState | undefined>(
	undefined
);

const getInitialDarkMode = () => {
	const prefersDarkMode = window.matchMedia('(prefers-color-scheme:dark)').matches;
	const storedDarkMode = localStorage.getItem(LOCAL_STORAGE_DARK_MODE) === 'true';
	return storedDarkMode || prefersDarkMode;
};

const GlobalContextProvider = ({ children }: Props) => {
	const [query, setQuery] = useState('office');
	const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());

	const toggleTheme = () => {
		const newIsDarkTheme = !isDarkTheme;
		setIsDarkTheme(newIsDarkTheme);
		localStorage.setItem(LOCAL_STORAGE_DARK_MODE, String(newIsDarkTheme));
	};

	useEffect(() => {
		document.body.classList.toggle('dark-theme', isDarkTheme);
	}, [isDarkTheme]);
    
	return (
		<GlobalContext.Provider value={{ query, setQuery, isDarkTheme, toggleTheme }}>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalContextProvider;