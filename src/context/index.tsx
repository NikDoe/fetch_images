import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react';

type GlobalContextState = {
	query: string;
    setQuery: Dispatch<SetStateAction<string>>;
};

type Props = {
	children: ReactNode;
};

export const GlobalContext = createContext<GlobalContextState | undefined>(
	undefined
);


const GlobalContextProvider = ({ children }: Props) => {
	const [query, setQuery] = useState('cat');
	return (
		<GlobalContext.Provider value={{ query, setQuery }}>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalContextProvider;