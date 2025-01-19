import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Slider from "./components/Slider.jsx";
import Container from "./components/Container.jsx";
import MovieOffer from "./components/movieOffer.jsx";
import MoreView from "./components/MoreView.jsx";
import Plans from "./components/Plans.jsx";
import Movie from "./components/Movie.jsx";

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

        <Container>
          <Movie category="Accion" listmovie={[{nombre:"Daniel", sipnosis:"probando"},{nombre:"Daniel", sipnosis:"probando"},{nombre:"Daniel", sipnosis:"probando"}
            ,{nombre:"Daniel", sipnosis:"probando"},{nombre:"Daniel", sipnosis:"probando"}
          ]}/>         
        </Container>

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
