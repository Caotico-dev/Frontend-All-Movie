import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Slider from "./components/Slider.jsx";
import Container from "./components/Container.jsx";
import MovieOffer from "./components/movieOffer.jsx";
import MoreView from "./components/MoreView.jsx";
import Plans from "./components/plans.jsx";

function App() {
  return (
    <>
      <Header>
        <Container>
          <Slider />
          <MovieOffer />
          <MoreView />
          <Plans /> {/**Inicio */}
        </Container>
        <Container></Container>
        <Container>
          <Plans />
          <MovieOffer /> {/**Planes Suscripcion */}
        </Container>
      </Header>
      <Footer />
    </>
  );
}

export default App;
