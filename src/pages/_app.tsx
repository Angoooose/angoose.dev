import Global from '@styles/global';
import { theme } from '@styles/theme';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
	const [isMounted, setIsMounted] = useState<boolean>(false);

	useEffect(() => setIsMounted(true), []);

	return (
		<ThemeProvider theme={theme}>
			<Global/>
			<div className={inter.className}>
				{isMounted && <Component {...pageProps} />}
			</div>
		</ThemeProvider>
	);
}
