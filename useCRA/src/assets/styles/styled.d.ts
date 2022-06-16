import 'styled-components';

// global style type 작성
declare module 'styled-components' {
	export interface DefaultTheme {
		color: {
			main: string;
			sub: string;
		};
	}
}
