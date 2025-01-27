import Slider1 from "../assets/Slider-1.png";
import Slider2 from "../assets/Slider-2.png";
import Slider3 from "../assets/Slider-3.png";

const sliderImages  = [Slider1,Slider2,Slider3];

function Slider({slider = sliderImages}) {
  return (
    <div id="carouselExample" className="carousel slide mb-4">
      <div className="carousel-inner">
        {slider.map((slider,index)=>(
          <div className={`carousel-item ${index === 0 ? "active":""}`} key={index}>
          <img
            src={slider}
            className="d-block w-100"
            style={{ objectFit: "cover" }}
            alt="Slider1"
          />
        </div>          
        ))}      
 
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
