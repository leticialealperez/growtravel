import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colorPrimary: string; // "#3b63b6"
        backgroundColor: string; // "#fffff"
        textColor: string; // "black"
        paddingDefault: number;
    }
}
