import React from "react";
import Slider from "react-slick";

const HomeBanner =()=>{

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true
    };
    return(
        <div className="homeBannerSection">
           <Slider {...settings}>
               <div className="item">
                   <img src="https://thanhlydocu.vn/wp-content/uploads/2024/06/slide-3-min-1536x611.jpg" className="w-100"/>
               </div>
               <div className="item">
                   <img src="https://thanhlydocu.vn/wp-content/uploads/2024/06/slide-3-min-1536x611.jpg" className="w-100"/>
               </div>
               <div className="item">
                   <img src="https://thanhlydocu.vn/wp-content/uploads/2024/06/slide-3-min-1536x611.jpg" className="w-100"/>
               </div>
               <div className="item">
                   <img src="https://thanhlydocu.vn/wp-content/uploads/2024/06/slide-3-min-1536x611.jpg" className="w-100"/>
               </div>
               <div className="item">
                   <img src="https://thanhlydocu.vn/wp-content/uploads/2024/06/slide-3-min-1536x611.jpg" className="w-100"/>
               </div>
            </Slider>
         </div>
    )
}

export default HomeBanner;