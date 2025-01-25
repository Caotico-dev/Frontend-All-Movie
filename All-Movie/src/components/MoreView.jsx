import view1 from "../assets/more-view-1.png";
import view2 from "../assets/more-view-2.png";
import view3 from "../assets/more-view-3.png";


const sipnosis =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptatum? Excepturi, officiis maiores. Veritatis, ratione inventore. Officia voluptatibus culpa ex, praesentium odit esse nobis est rem, suscipit animi, nemo alias.";

const title = "Title Movie";

const defaultmovie = [
  { defaultTitle: title, defaultView: view1, defaultSipnosis: sipnosis },
  { defaultTitle: title, defaultView: view2, defaultSipnosis: sipnosis },
  { defaultTitle: title, defaultView: view3, defaultSipnosis: sipnosis },
];
function MoreView({
  movie = defaultmovie
}) {
  return (
    <section>
      <h2 className="text-center">Peliculas mas vistas.</h2>
      <div className="row my-4 w-75 mx-auto">
        {movie.map((movie, index) => (
          <div className="col w-75" key={index}>
            <img src={movie.defaultView} className="img-fluid" alt={movie.defaultTitle} />
            <div className="bg-white w-100 p-2 rounded-bottom">
              <h3 className="text-start">{movie.defaultTitle}</h3>
              <p className="text-start">
                <strong>Sipnosis: </strong>
                {movie.defaultSipnosis}
              </p>
              <button type="button" className="btn btn-success">
                Ver mas
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MoreView;
