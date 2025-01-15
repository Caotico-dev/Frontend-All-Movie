import view1 from "../assets/more-view-1.png";
import view2 from "../assets/more-view-2.png";
import view3 from "../assets/more-view-3.png";

function MoreView() {
  return (
    <section>
      <h2 className="text-center">Peliculas mas vistas.</h2>
      <div className="row my-4 w-75 mx-auto">

        <div className="col w-75">
          <img src={view1} className="img-fluid" alt="more view" />
          <div className="bg-white w-100 p-2">
            <p className="text-start">
              <strong>Sipnosis: </strong> Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Ratione facere tempore perferendis
              pariatur praesentium facilis nostrum odit provident dolorem, neque
              beatae. Explicabo officiis vel voluptatibus quis facilis atque
              numquam rerum.
            </p>
            <button type="button" className="btn btn-success">
              Ver mas
            </button>
          </div>
        </div>
        <div className="col  w-75">
          <img src={view2} className="img-fluid" alt="more view" />
          <div className="bg-white w-100 p-2">
            <p className="text-start">
              <strong>Sipnosis: </strong> Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Ratione facere tempore perferendis
              pariatur praesentium facilis nostrum odit provident dolorem, neque
              beatae. Explicabo officiis vel voluptatibus quis facilis atque
              numquam rerum.
            </p>
            <button type="button" className="btn btn-success">
              Ver mas
            </button>
          </div>
        </div>
        <div className="col w-75">
          <img src={view3} className="img-fluid" alt="more view" />
          <div className="bg-white w-100 p-2">
            <p className="text-start">
              <strong>Sipnosis: </strong> Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Ratione facere tempore perferendis
              pariatur praesentium facilis nostrum odit provident dolorem, neque
              beatae. Explicabo officiis vel voluptatibus quis facilis atque
              numquam rerum.
            </p>
            <button type="button" className="btn btn-success">
              Ver mas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MoreView;
