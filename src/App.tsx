import { GlobalStyles } from "./configs/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home";
import { lightTheme } from "./configs/themes/light-theme";

export function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
}
