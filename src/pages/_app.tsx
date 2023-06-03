import Global from '@styles/global';
import { theme } from '@styles/theme';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
	const [isMounted, setIsMounted] = useState<boolean>(false);

	useEffect(() => setIsMounted(true), []);

	return (
		<ThemeProvider theme={theme}>
			<Global/>
			<Head>
				<title>Angoose</title>
				<meta name={'description'} content={'Full-Stack Software Engineer from the U.S.'} />
				<meta name={'theme-color'} content={theme.colors.primaryGreen} />
				<meta property={'og:site_name'} content={'Full-Stack Software Engineer'} />
				<link rel="icon" href="/favicon.png" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<div className={inter.className}>
				{isMounted && <Component {...pageProps} />}
			</div>
		</ThemeProvider>
	);
}
