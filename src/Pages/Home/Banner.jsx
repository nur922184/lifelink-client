import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../../assets/Banner-image/1.jpg";
import img2 from "../../assets/Banner-image/2.jpg";
import img3 from "../../assets/Banner-image/3.jpg";
import img4 from "../../assets/Banner-image/4.jpg";
import img5 from "../../assets/Banner-image/5.jpg";
import img6 from "../../assets/Banner-image/6.jpg";

const Banner = () => {
  return (
    <div>
      <Carousel
        showThumbs={false} 
        autoPlay={true} 
        infiniteLoop={true} 
        showStatus={false} 
        interval={3000} 
        transitionTime={500} 
        stopOnHover={true} 
        showArrows={true} 
        emulateTouch={true}
        useKeyboardArrows={true} 
        className="relative"
      >
        <div>
          <img src={img1} alt="Slide 1" className="h-[500px] object-cover w-full" />
        </div>
        <div>
          <img src={img2} alt="Slide 2" className="h-[500px] object-cover w-full" />
        </div>
        <div>
          <img src={img3} alt="Slide 3" className="h-[500px] object-cover w-full" />
        </div>
        <div>
          <img src={img4} alt="Slide 4" className="h-[500px] object-cover w-full" />
        </div>
        <div>
          <img src={img5} alt="Slide 5" className="h-[500px] object-cover w-full" />
        </div>
        <div>
          <img src={img6} alt="Slide 6" className="h-[500px] object-cover w-full" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
