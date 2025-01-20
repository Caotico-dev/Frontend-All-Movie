function Footer() {
  return (
    <footer className="bg-success p-3 mt-4 d-flex justify-content-center align-items-center">
      <div className="mx-3">
        <h2>Contactos</h2>
        <ul className="list-unstyled">
          <li>Correo: allmovie@movie.com</li>
          <li>Numero: 809-232-0389</li>
        </ul>
      </div>
      <a href="#" className="mx-3 text-dark text-decoration-none" onClick={e => e.preventDefault()}>
        Terminos y uso.
      </a>
      <a href="#" className="mx-3 text-dark text-decoration-none" onClick={e => e.preventDefault()}>
        Politica de privacidad.
      </a>
    </footer>
  );
}

export default Footer;