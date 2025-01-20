import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Slider from "./components/Slider.jsx";
import Container from "./components/Container.jsx";
import MovieOffer from "./components/movieOffer.jsx";
import MoreView from "./components/MoreView.jsx";
import Plans from "./components/Plans.jsx";
import ListMovie from "./components/ListMovie.jsx";

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
        <ListMovie
            category="Peliculas Destacadas"
            listmovie={[
              { nombre: "Duro de matar", sipnosis: "Un grupo terrorista se apodera de un edificio de Los Ángeles y toma a un grupo de personas como rehenes. El policía de Nueva York John McClane consigue escapar del acoso terrorista. Aunque está solo y fuera de servicio, McClane decide enfrentarse a los secuestradores y se convierte en la única esperanza para los rehenes." },
              { nombre: "Duro de matar", sipnosis: "Un grupo terrorista se apodera de un edificio de Los Ángeles y toma a un grupo de personas como rehenes. El policía de Nueva York John McClane consigue escapar del acoso terrorista. Aunque está solo y fuera de servicio, McClane decide enfrentarse a los secuestradores y se convierte en la única esperanza para los rehenes." },
              { nombre: "Duro de matar", sipnosis: "Un grupo terrorista se apodera de un edificio de Los Ángeles y toma a un grupo de personas como rehenes. El policía de Nueva York John McClane consigue escapar del acoso terrorista. Aunque está solo y fuera de servicio, McClane decide enfrentarse a los secuestradores y se convierte en la única esperanza para los rehenes." },
              { nombre: "Duro de matar", sipnosis: "Un grupo terrorista se apodera de un edificio de Los Ángeles y toma a un grupo de personas como rehenes. El policía de Nueva York John McClane consigue escapar del acoso terrorista. Aunque está solo y fuera de servicio, McClane decide enfrentarse a los secuestradores y se convierte en la única esperanza para los rehenes." },
              { nombre: "Duro de matar", sipnosis: "Un grupo terrorista se apodera de un edificio de Los Ángeles y toma a un grupo de personas como rehenes. El policía de Nueva York John McClane consigue escapar del acoso terrorista. Aunque está solo y fuera de servicio, McClane decide enfrentarse a los secuestradores y se convierte en la única esperanza para los rehenes." },
            ]}
          />
          <ListMovie
            category="Accion"
            listmovie={[
              { nombre: "Kill Bill", sipnosis: "Mamba Negra es una asesina que, el día de su boda, es atacada por los miembros de la banda de su jefe, Bill. Sin embargo consigue sobrevivir, aunque queda en coma. Cinco años después despierta, con un deseo de venganza." },
              { nombre: "Kill Bill", sipnosis: "Mamba Negra es una asesina que, el día de su boda, es atacada por los miembros de la banda de su jefe, Bill. Sin embargo consigue sobrevivir, aunque queda en coma. Cinco años después despierta, con un deseo de venganza." },
              { nombre: "Kill Bill", sipnosis: "Mamba Negra es una asesina que, el día de su boda, es atacada por los miembros de la banda de su jefe, Bill. Sin embargo consigue sobrevivir, aunque queda en coma. Cinco años después despierta, con un deseo de venganza." },
              { nombre: "Kill Bill", sipnosis: "Mamba Negra es una asesina que, el día de su boda, es atacada por los miembros de la banda de su jefe, Bill. Sin embargo consigue sobrevivir, aunque queda en coma. Cinco años después despierta, con un deseo de venganza." },
              { nombre: "Kill Bill", sipnosis: "Mamba Negra es una asesina que, el día de su boda, es atacada por los miembros de la banda de su jefe, Bill. Sin embargo consigue sobrevivir, aunque queda en coma. Cinco años después despierta, con un deseo de venganza." },
            ]}
          />
          <ListMovie
            category="Drama"
            listmovie={[
              { nombre: "El Lobo de Wall Street.", sipnosis: "La historia del corredor de bolsa neoyorquino Jordan Belfort, quien, con poco más de veinte años, fue apodado 'el lobo de Wall Street' por su enorme éxito y fortuna como fundador de la agencia bursátil Stratton Oakmont." },
              { nombre: "El Lobo de Wall Street.", sipnosis: "La historia del corredor de bolsa neoyorquino Jordan Belfort, quien, con poco más de veinte años, fue apodado 'el lobo de Wall Street' por su enorme éxito y fortuna como fundador de la agencia bursátil Stratton Oakmont." },
              { nombre: "El Lobo de Wall Street.", sipnosis: "La historia del corredor de bolsa neoyorquino Jordan Belfort, quien, con poco más de veinte años, fue apodado 'el lobo de Wall Street' por su enorme éxito y fortuna como fundador de la agencia bursátil Stratton Oakmont." },
              { nombre: "El Lobo de Wall Street.", sipnosis: "La historia del corredor de bolsa neoyorquino Jordan Belfort, quien, con poco más de veinte años, fue apodado 'el lobo de Wall Street' por su enorme éxito y fortuna como fundador de la agencia bursátil Stratton Oakmont." },
              { nombre: "El Lobo de Wall Street.", sipnosis: "La historia del corredor de bolsa neoyorquino Jordan Belfort, quien, con poco más de veinte años, fue apodado 'el lobo de Wall Street' por su enorme éxito y fortuna como fundador de la agencia bursátil Stratton Oakmont." },
            ]}
          />
          <ListMovie
            category="Aventura"
            listmovie={[
              { nombre: "La Maldicion del Perla Negra.", sipnosis: "El capitán Barbossa le roba el barco al pirata Jack Sparrow y secuestra a Elizabeth, amiga de Will Turner. Barbossa y su tripulación son víctimas de un conjuro que los condena a vivir eternamente y a transformarse cada noche en esqueletos vivientes." },
              { nombre: "La Maldicion del Perla Negra.", sipnosis: "El capitán Barbossa le roba el barco al pirata Jack Sparrow y secuestra a Elizabeth, amiga de Will Turner. Barbossa y su tripulación son víctimas de un conjuro que los condena a vivir eternamente y a transformarse cada noche en esqueletos vivientes." },
              { nombre: "La Maldicion del Perla Negra.", sipnosis: "El capitán Barbossa le roba el barco al pirata Jack Sparrow y secuestra a Elizabeth, amiga de Will Turner. Barbossa y su tripulación son víctimas de un conjuro que los condena a vivir eternamente y a transformarse cada noche en esqueletos vivientes." },
              { nombre: "La Maldicion del Perla Negra.", sipnosis: "El capitán Barbossa le roba el barco al pirata Jack Sparrow y secuestra a Elizabeth, amiga de Will Turner. Barbossa y su tripulación son víctimas de un conjuro que los condena a vivir eternamente y a transformarse cada noche en esqueletos vivientes." },
              { nombre: "La Maldicion del Perla Negra.", sipnosis: "El capitán Barbossa le roba el barco al pirata Jack Sparrow y secuestra a Elizabeth, amiga de Will Turner. Barbossa y su tripulación son víctimas de un conjuro que los condena a vivir eternamente y a transformarse cada noche en esqueletos vivientes." }
            ]}
          />
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
