import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
// AOS animation
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  // AOS animaion
  useEffect(() => {
    AOS.init({
      offset: 200,
      delay: 100,
      duration: 1000,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <LandingPage />
      {/* <LandingPage /> */}
      {/* <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage />} exact={true}/>
            <Route path="*" element={<PageNotFound/>} />
        </Routes>
    </BrowserRouter> */}
    </div>
  );
}

export default App;
