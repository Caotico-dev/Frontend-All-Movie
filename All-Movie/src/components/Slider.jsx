import Slider1 from "../assets/Slider-1.png";
import Slider2 from "../assets/Slider-2.png";
import Slider3 from "../assets/Slider-3.png";

function Slider() {
  return (
    <div id="carouselExample" className="carousel slide mb-4">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={Slider1}
            className="d-block w-100"
            style={{ objectFit: "cover" }}
            alt="Slider1"
          />
        </div>
        <div className="carousel-item">
          <img
            src={Slider2}
            className="d-block w-100"
            style={{ objectFit: "cover" }}
            alt="Slider2"
          />
        </div>
        <div className="carousel-item">
          <img
            src={Slider3}
            className="d-block w-100"
            style={{ objectFit: "cover" }}
            alt="Slider3"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
export default Slider;
