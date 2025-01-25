import movie1 from "../assets/Movie-offer-1.png";
import movie2 from "../assets/Movie-offer-2.png";
import movie3 from "../assets/Movie-offer-3.png";

const defaultTitle = "Title Movie";

const defaultMovie = [
  { title: defaultTitle, view: movie1, price: "10.9$", discount: "30%" },
  { title: defaultTitle, view: movie2, price: "40.9$", discount: "40%" },
  { title: defaultTitle, view: movie3, price: "80.9$", discount: "50%" },
];

function MovieOffer({movie = defaultMovie}) {
  return (
    <section>
      <h2 className="text-center">Ofertas de Peliculas.</h2>
      <div className="row my-4 w-75 mx-auto">

        {movie.map((movie, index) => (
          <div className="col w-75" key={index}>
            <img src={movie.view} className="img-fluid" alt="Movie offer" />
            <div className="bg-white w-100 p-2 rounded-bottom">
              <h3 className="text-start">{movie.title}</h3>
              <p className="text-start">
                Precio: <strong>{movie.price}</strong>
              </p>
              <p className="text-start">
                Descuente de <strong>{movie.discount}</strong>
              </p>
              <button type="button" className="btn btn-success">
                Comprar
              </button>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default MovieOffer;
