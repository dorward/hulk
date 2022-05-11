import 'styled-components';

import { ThemeType } from './theme';

declare module 'styled-components' {
	export interface DefaultTheme extends ThemeType {
		darkBold: string;
		darkSoft: string;
		lightSoft: string;
		lightRegular: string;
		lightBold: string;
	}
}
