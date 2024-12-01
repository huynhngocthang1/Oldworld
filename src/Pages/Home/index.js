import HomeBanner from "../../Components/HomeBanner";
import banner2 from "../../assets/images/banner2.webp" 
import Button from '@mui/material/Button';
import { IoIosArrowRoundForward } from "react-icons/io";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Rating from '@mui/material/Rating';

const Home =()=> {

    var productSliderOptions = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
      };

    return(
        <>
         <HomeBanner/>

         <section className="homeProducts">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="banner">
                            <img src={banner2} className="cursor"/>
                        </div>
                    </div>
                    <div className="col-md-9 productRow">
                        <div className="d-flex align-items-center">
                            <div className="info w-75">
                                <h3 className="mb-0 hd">BEST SELLERS</h3>
                                <p className="text-light text-sml mb-0">Do not miss the current until the end of March.</p>
                            </div>

                            <Button className="viewAllBtn ms-auto">View all <IoIosArrowRoundForward/></Button>
                        </div>

                        <div className="product_row w-100 mt-4">
                        <Swiper
                           slidesPerView={4}
                           spaceBetween={30}
                          pagination={{
                            clickable: true,
                          }}
                          modules={[Navigation]}
                           className="mySwiper"
                               >

                            <SwiperSlide>
                            <div className="item productItem">
                                <div className="imgWrapper">
                                    <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg" className="w-100"/>
                                </div>
                                <div className="info">
                                  <h4>Werther's Original Caramel Hard Candies</h4>
                                  <span className="text-success d-block">In Stock</span>
                                  <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>

                                  <div className="d-flex">
                                    <span className="oldPrice">$20.00</span>
                                    <span className="netPrice text-danger ml-3">$14.00</span>
                                  </div>
                                </div>
                            </div>
                            </SwiperSlide>

                            <SwiperSlide>
                            <div className="item productItem">
                                <div className="imgWrapper">
                                    <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg" className="w-100"/>
                                </div>
                            </div>
                            </SwiperSlide>

                            <SwiperSlide>
                            <div className="item productItem">
                                <div className="imgWrapper">
                                    <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg" className="w-100"/>
                                </div>
                            </div>
                            </SwiperSlide>

                            <SwiperSlide>
                            <div className="item productItem">
                                <div className="imgWrapper">
                                    <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg" className="w-100"/>
                                </div>
                            </div>
                            </SwiperSlide>

                            <SwiperSlide>
                            <div className="item productItem">
                                <div className="imgWrapper">
                                    <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg" className="w-100"/>
                                </div>
                            </div>
                            </SwiperSlide>
                            
                            
                            </Swiper>
                        </div>

                    </div>
                </div>
            </div>
         </section>
        </>
    )
}
export default Home;