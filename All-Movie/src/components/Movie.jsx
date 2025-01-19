import movie from "../assets/Movie.png";

function Movie({ category, listmovie }) {
  const list = listmovie;

  return (
    <section>
      <h2 className="mx-1">{category}</h2>
      <div className="d-flex">
        {list.map((showmovie, index) => (
          <div className="card mx-1" style={{ width: "18rem" }} key={index}>
            <img src={movie} className="card-img-top" alt="Movie" />
            <div className="card-body">
              <h5 className="card-title">{showmovie.nombre}</h5>
              <p className="card-text">{showmovie.sipnosis}</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Movie;
