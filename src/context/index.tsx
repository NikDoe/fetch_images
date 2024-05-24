import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react';

type GlobalContextState = {
	query: string;
    setQuery: Dispatch<SetStateAction<string>>;
    isDarkTheme: boolean;
    toggleTheme: () => void;
};

type Props = {
	children: ReactNode;
};

export const GlobalContext = createContext<GlobalContextState | undefined>(
	undefined
);


const GlobalContextProvider = ({ children }: Props) => {
	const [query, setQuery] = useState('office');
	const [isDarkTheme, setIsDarkTheme] = useState(false);

	const toggleTheme = () => {
		const newIsDarkTheme = !isDarkTheme;
		setIsDarkTheme(newIsDarkTheme);
		document.body.classList.toggle('dark-theme', newIsDarkTheme);
	};
    
	return (
		<GlobalContext.Provider value={{ query, setQuery, isDarkTheme, toggleTheme }}>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalContextProvider;