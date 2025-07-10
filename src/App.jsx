import "./App.css";
import "./styles/GlobalStyle.css";
import Navigation from "./screens/navigations/Navigation";
import { ThemeProvider } from "./theme/ThemeContext";
import { useEffect } from "react";
import { MainContent } from "./constants/content/MainContent";
import Aos from "aos";
const App = () => {
  console.clear();
  useEffect(() => {
    document.title = MainContent.appName;
    let faviconLink =
      document.querySelector('link[rel="icon"]') ||
      document.createElement("link");
    faviconLink.rel = "icon";
    faviconLink.href = MainContent.appLogo;
    document.head.appendChild(faviconLink);
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  );
};

export default App;
