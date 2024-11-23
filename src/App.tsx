import { ThemeProvider, createTheme } from "@mui/material/styles";
import LayoutClient from "./LayoutClient";

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LayoutClient />
    </ThemeProvider>
  );
}

export default App;
