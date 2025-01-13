import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Slider from "./components/Slider.jsx";
import Container from "./components/Container.jsx";
import MovieOffer from "./components/movieOffer.jsx";

function App() {  
  return (
    <>
      <Header />
      <Container>
        <Slider />
        <MovieOffer/>        
      </Container>
      <Footer />
    </>
  );
}

export default App;
