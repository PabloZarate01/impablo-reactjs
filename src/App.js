import "./App.css";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { darkTheme } from "./theme";
import { GlobalStyles } from './global';
import SideBar from "./components/SideBar";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <GlobalStyles></GlobalStyles>
        <LandingPage />
      </Router>
    </ThemeProvider>
  );
}

export default App;
