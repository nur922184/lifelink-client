import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../assets/Images/1.jpeg'
import img2 from '../../assets/Images/7.jpg'
import img3 from '../../assets/Images/4.jpeg'
import img4 from '../../assets/Images/3.jpg'
import img5 from '../../assets/Images/15.png'
import img6 from '../../assets/Images/10.jpeg'

const Banner = () => {
    return (
        <div>
              <Carousel>
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img2}/>
                </div>
                <div>
                    <img src={img3}/>
                </div>
                <div>
                    <img src={img4}/>
                </div>
                <div>
                    <img src={img5}/>
                </div>
                <div>
                    <img src={img6}/>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;