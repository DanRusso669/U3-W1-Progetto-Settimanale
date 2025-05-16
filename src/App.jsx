import { Container } from "react-bootstrap";
import "./App.css";
import TopBar from "./components/TopBar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import MineCarousel from "./components/MineCarousel";

function App() {
  return (
    <>
      <TopBar />
      <Container fluid className="px-4">
        <Hero />
        <Gallery query="BATMAN" />
        <Gallery query="avengers" />
        <Gallery query="The Lord Of The Rings" />
      </Container>
      <Footer />
    </>
  );
}

export default App;
