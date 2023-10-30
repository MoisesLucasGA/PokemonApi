import { Home } from "./Pages/Home/Home";
import * as Styled from "./styles";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Styled.Body>
        <Home />
      </Styled.Body>
    </ThemeProvider>
  );
}

export default App;
