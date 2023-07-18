import "./App.css";
import { About } from "./Components/About/About";
import { Banner } from "./Components/Banner/Banner";
import { Callta } from "./Components/Callta/Callta";
import { Contact } from "./Components/Contact/Contact";
import { Features } from "./Components/Features/Features";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";
import { Portfolio } from "./Components/Portfolio/Portfolio";
import Team from "./Components/Team/Team";
import { Photo } from "./Components/Photo/Photo";

function App() {
  return (
    <div>
      <Banner />
      <Nav />
      <About />
      <Photo />
      <Features />
      <Callta />
      <Portfolio />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
