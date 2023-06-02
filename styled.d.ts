import 'styled-components';

export interface Colors {
    primary: {
        [key: number]: string;
    };
    primaryGreen: string;
}

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: Colors;
	}
}