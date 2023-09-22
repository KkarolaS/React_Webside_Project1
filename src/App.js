import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import OfferSection from "./components/OfferSection/OfferSection";
import AboutSection from "./components/AboutSection/AboutSection";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.app}>
      <Header />
      <Main />
      <AboutSection />
      <OfferSection />
      <Footer />
    </div>
  );
}

export default App;
