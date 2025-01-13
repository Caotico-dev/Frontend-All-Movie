function Header() {
  return (
    <nav className="fixed-top bg-success">
      <ul className="nav justify-content-center">
        <h1 className="px-4 text-light fs-4">All-Movie</h1>
        <li className="nav-item">
          <a
            className="nav-link text-light active"
            aria-current="page"
            href="#"
          >
            Inicio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">
            Peliculas
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">
            Planes de suscripcion
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;