import 'styled-components';
import { theme } from '.';

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

// interface 적용 (default theme)
