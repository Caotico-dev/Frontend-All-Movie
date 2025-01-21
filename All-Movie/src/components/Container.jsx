function Container({ children }) {
  return (
    <div className="container mt-4">
      <br />
      <br />
      <br />
      <h2 className="text-center">
        Bienvenido a{" "}
        <span className="text-light bg-success px-2">All-Movie</span>
      </h2>
      <h2 className="text-center">Tu lugar favorito para ver Peliculas.</h2>
      {children}
    </div>
  );
}

export default Container;
