function Plans() {
  return (
    <section>
      <h2 className="text-center">Planes de suscripcion</h2>
      <div className="row my-4 mx-auto">

        {/* Plan Básico */}
        <div className="col bg-white mx-2 p-2 w-75 d-flex flex-column justify-content-between rounded">
          <div>
            <h3 className="text-center">Plan Basico</h3>
            <ul>
              <li>Puede ver peliculas sin publicidad y sin limites.</li>
              <li>Puede ver peliculas en un dispositvo a la vez.</li>
              <li>Reproducion 720p HD.</li>
            </ul>
          </div>
          <div className="d-flex justify-content-start mt-auto">
            <button type="button" className="btn btn-success">
              Comprar
            </button>
          </div>
        </div>

        {/* Plan Estandar */}
        <div className="col bg-white mx-2 p-2 w-75 d-flex flex-column justify-content-between rounded">
          <div>
            <h3 className="text-center">Plan Estandar</h3>
            <ul>
              <li>Puede ver peliculas sin publicidad y sin limites.</li>
              <li>Puede ver peliculas en 2 dispositvo a la vez.</li>
              <li>Reproducion 1080p HD.</li>
              <li>Opcion de agregar un miembro extra.</li>
            </ul>
          </div>
          <div className="d-flex justify-content-start mt-auto">
            <button type="button" className="btn btn-success">
              Comprar
            </button>
          </div>
        </div>

        {/* Plan Premium */}
        <div className="col bg-white mx-2 p-2 w-75 d-flex flex-column justify-content-between rounded">
          <div>
            <h3 className="text-center">Plan Premiun</h3>
            <ul>
              <li>Puede ver peliculas sin publicidad y sin limites.</li>
              <li>Puede ver peliculas en 4 dispositvo a la vez.</li>
              <li>Reproducion 4k Ultra HD + HDR.</li>
              <li>Puede descargar peliculas.</li>
              <li>Puede ver peliculas en extreno.</li>
            </ul>
          </div>
          <div className="d-flex justify-content-start mt-auto">
            <button type="button" className="btn btn-success">
              Comprar
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Plans;

