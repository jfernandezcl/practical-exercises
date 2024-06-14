import "./App.css";
import Header from "./components/Header";
import Article from "./components/Article";
import Aside from "./components/Aside";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Article />
      <Aside />
      <AboutMe />
      <Footer />
    </div>
  );
};

export default App;
