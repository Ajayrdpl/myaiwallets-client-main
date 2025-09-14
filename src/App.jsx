import "./App.css";
import "./styles/GlobalStyle.css";
import Navigation from "./screens/navigations/Navigation";
import { ThemeProvider } from "./theme/ThemeContext";
import { useEffect, useState } from "react";
import { MainContent } from "./constants/content/MainContent";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    console.clear();
    document.title = MainContent.appName;

    let faviconLink =
      document.querySelector('link[rel="icon"]') ||
      document.createElement("link");
    faviconLink.rel = "icon";
    faviconLink.href = MainContent.appLogo;
    document.head.appendChild(faviconLink);

    // Page load pe popup show
    setShowPopup(true);
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

      {/* Popup with video */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            {/* Close button */}
            <button
              className="close-btn"
              onClick={() => setShowPopup(false)}
            >
              ✖
            </button>

            <video
              src="/video.mp4"   // public folder me rakha hua video
              controls
              autoPlay
              muted        // 🔹 autoplay ke liye required
              playsInline  // 🔹 mobile devices ke liye
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </div>
        </div>
      )}
    </ThemeProvider>
  );
};

export default App;
