function Footer() {
  return (
    <footer className="bg-success p-3 mt-4 d-flex justify-content-center align-items-center">
      <div className="mx-3">
        <h2>Contactos</h2>
        <ul className="list-unstyled">
          <li>Correo: <a  href="mailto:allmovie@movie.com" className="text-dark text-decoration-none">allmovie@movie.com</a></li>
          <li>Telefono: <a href="tel:+18092320389" className="text-dark text-decoration-none">809-232-0389</a></li>
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