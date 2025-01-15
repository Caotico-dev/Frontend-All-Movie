import movie1 from "../assets/Movie-offer-1.png";
import movie2 from "../assets/Movie-offer-2.png";
import movie3 from "../assets/Movie-offer-3.png";

function MovieOffer() {
  return (
    <section>
      <h2 className="text-center">Oferta de Peliculas.</h2>
      <div className="row my-4 w-75 mx-auto">
        <div className="col w-75">
          <img src={movie1} className="img-fluid" alt="Movie offer" />
          <div className="bg-white w-100 p-2 rounded-bottom">
            <p className="text-start">
              Precio: <strong>10.9$</strong>
            </p>
            <p className="text-start">
              Descuente de <strong>30%</strong>
            </p>
            <button type="button" className="btn btn-success">
              Comprar
            </button>
          </div>
        </div>
        <div className="col  w-75">
          <img src={movie2} className="img-fluid" alt="Movie offer" />
          <div className="bg-white w-100 p-2 rounded-bottom">
            <p className="text-start">
              Precio: <strong>40.9$</strong>
            </p>
            <p className="text-start">
              Descuento de <strong>40%</strong>
            </p>
            <button type="button" className="btn btn-success">
              Comprar
            </button>
          </div>
        </div>
        <div className="col w-75">
          <img src={movie3} className="img-fluid" alt="Movie offer" />
          <div className="bg-white w-100 p-2 rounded-bottom">
            <p className="text-start">
              Precio: <strong>80.9$</strong>
            </p>
            <p className="text-start">
              Descuente de <strong>50%</strong>
            </p>
            <button type="button" className="btn btn-success">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MovieOffer;
