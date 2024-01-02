import "./App.css";
import Header from "./components/Header";
import Help from "./components/Help";
import "bootstrap/dist/css/bootstrap.min.css";
import Ourprocess from "./components/Ourprocess";
import Brands from "./components/Brands";
import Start from "./components/Start";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import Aos from "aos";
import "aos/dist/aos.css";
import "animate.css";
import { useEffect } from "react";
import Backtotop from "./components/Bactotop";
function App() {
  useEffect(() => {
    Aos.init({ once: true, disable: "mobile" });
    Aos.refresh();
  }, []);
  
  return (
    <>
      <div className="overflow-hidden">
        <Preloader />
        <Header />
        <Help />
        <Ourprocess />
        <Brands />
        <Start />
        <Footer />
        <Backtotop />
      </div>
    </>
  );
}

export default App;
