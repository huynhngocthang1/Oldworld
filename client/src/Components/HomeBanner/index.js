import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css"; // Import CSS của Swiper
import slider1 from "../../assets/images/slider1.webp";
import slider2 from "../../assets/images/slider2.webp";
import slider3 from "../../assets/images/slider3.webp";
import slider4 from "../../assets/images/slider4.webp";
import '@fortawesome/fontawesome-free/css/all.min.css';

const HomeBanner = () => {
    return (
        <div className="container mt-3">
            <div className="homeBannerSection">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={15}
                    navigation={true} 
                    loop={false} 
                    autoplay={{
                        delay: 2500, 
                        disableOnInteraction: false, 
                    }}
                    modules={[Navigation, Autoplay]} 
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="item">
                           <img src={slider1} className="w-100" alt="Slider 1" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                          <img src={slider2} className="w-100" alt="Slider 2" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                          <img src={slider3} className="w-100" alt="Slider 3" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                       <div className="item">
                         <img src={slider4} className="w-100" alt="Slider 4" />
                       </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default HomeBanner;
