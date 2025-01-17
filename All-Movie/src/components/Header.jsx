import { useState } from "react";
function Header({children}) {
  const [view, setView] = useState(0);   
  
  return (
  <>
    <nav className="fixed-top bg-success">
      <ul className="nav justify-content-center">
        <h1 className="px-4 text-light fs-4">All-Movie</h1>
        <li className="nav-item">
          <a
            className="nav-link text-light active"
            aria-current="page"
            href="#" onClick={() => { setView(0);}} >
            Inicio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#" onClick={() => { setView(1);}}>
            Peliculas
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#" onClick={() => { setView(2);}} >
            Planes de suscripcion
          </a>
        </li>
      </ul>
    </nav>
    {children[view]}
    </>
  );
}

export default Header;