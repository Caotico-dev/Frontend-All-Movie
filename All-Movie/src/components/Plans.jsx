function Plans() {
  return (
    <section>
      <h2 className="text-center">Planes de suscripcion</h2>
      <div className="row my-4 mx-auto ">

        <div className="col bg-white mx-2 p-2 w-75">
          <h3 className="text-center">Plan Basico</h3>
          <ul>
            <li>Puede ver peliculas sin publicidad y sin limites.</li>
            <li>Puede ver peliculas en un dispositvo a la vez.</li>
            <li>Reproducion 720p HD.</li>
          </ul>
          <button type="button" className="btn btn-success ">
              Comprar
            </button>
        </div>

        <div className="col bg-white mx-2 p-2 w-75">
          <h3 className="text-center">Plan Estandar</h3>
          <ul>
            <li>Puede ver peliculas sin publicidad y sin limites.</li>
            <li>Puede ver peliculas en 2 dispositvo a la vez.</li>
            <li>Reproducion 1080p HD.</li>
            <li>Opcion de agregar un miembro extra.</li>
          </ul>
          <button type="button" className="btn btn-success">
              Comprar
            </button>
        </div>

        <div className="col bg-white mx-2 p-2 w-75 position-relative">
          <h3 className="text-center">Plan Premiun</h3>
          <ul className="">
            <li>Puede ver peliculas sin publicidad y sin limites.</li>
            <li>Puede ver peliculas en 4 dispositvo a la vez.</li>
            <li>Reproducion 4k Ultra HD + HDR.</li>
            <li>Puede descargar peliculas.</li>
            <li>Puede ver peliculas en extreno.</li>
          </ul>
          <button type="button" className="btn btn-success position-sticky" style={{bottom:"10px"}}>
              Comprar
            </button>
        </div>

      </div>
    </section>
  );
}

export default Plans;
