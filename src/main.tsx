import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import GlobalContextProvider from './context/index.tsx';

import App from './App.tsx';
import './index.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<GlobalContextProvider>
			<QueryClientProvider client={queryClient}>
				<App />
				<ReactQueryDevtools buttonPosition='bottom-left' position='right' />
			</QueryClientProvider>
		</GlobalContextProvider>
	</React.StrictMode>
);
