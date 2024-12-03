import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import { MdClose } from "react-icons/md";
import Rating from '@mui/material/Rating';
import Slider from 'react-slick';
import { useRef } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import QuantityBox from '../QuantityBox';
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineCompareArrows } from "react-icons/md";
const ProductModal =(props)=>{

    const zoomSliderBig = useRef();
    const zoomSlider = useRef();

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
    };

    var settings2 = {
        dots: false,
        infinite: false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
    };

    const goto = (index) => {
        zoomSlider.current.slickGoTo(index);
        zoomSliderBig.current.slickGoTo(index);
    }

    return (
        <>
        <Dialog
            open={true} className="productModal" onClose={()=>props.closeProductModal()} >          
            <Button className='close_'  onClick={()=>props.closeProductModal()} ><MdClose /></Button>
            <h4 className='mb-1 font-weight-bold'>All Natural Italian-Style Chicken Meatballs</h4>
            <div className='d-flex align-items-center'>
                <div  className='d-flex align-items-center me-4'>
                    <span>Brands</span>
                    <span className='ms-2'>Welch's</span>
                </div>
                <Rating name="read-only" value={5} size='small' precision={0.5} readOnly />
            </div>
            
            <hr/>

            <div className='row mt-2 productDetailsModal'>
                <div className='col-md-5'>
                    <div className='productZoom'>
                        <div className='badge badge-primary'>23%</div>
                    <Slider {...settings2} className='zoomSliderBig' ref={zoomSliderBig}>
                        <div className='item'>
                            <InnerImageZoom
                            zoomType="hover" zoomScale={1}
                            src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg`}
                            />
                             
                        </div>
                        <div className='item'>
                            <InnerImageZoom
                            zoomType="hover" zoomScale={1}
                            src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47.jpg`}
                            />
                             
                        </div>
                        <div className='item'>
                            <InnerImageZoom
                            zoomType="hover" zoomScale={1}
                            src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg`}
                            />
                             
                        </div>
                    
                    </Slider>
                    </div>

                    <Slider {...settings} className='zoomSlider' ref={zoomSlider}>
                        <div className='item'>
                            <img src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg`} className='w-100' onClick={()=>goto(0)}/>
                        </div>
                        <div className='item'>
                            <img src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47.jpg`} className='w-100'onClick={()=>goto(1)}/>
                        </div>
                        <div className='item'>
                            <img src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg`} className='w-100'onClick={()=>goto(2)}/>
                        </div>
                    </Slider>
                </div>
                <div className='col-md-7'>
                    <div className='d-flex info align-items-center mb-3'>
                        <span className='oldPrice lg me-2'>$9.35</span>
                        <span className='netPrice text-danger lg'>$7.25</span>
                    </div>
                    <span className='badge bg-success'>IN STOCK</span>
                    <p className='mt-3'>Mì gói tiện lợi: Hương vị thơm ngon, dễ chế biến, phù hợp cho bữa ăn nhanh.</p>

                    <div className='d-flex align-items-center'>
                       <QuantityBox/>
                        <Button className='btn-blue btn-lg btn-big btn-round ms-3'>Add to Cart</Button>
                    </div>


                    <div className='d-flex align-items-center mt-5 actions'>
                        <Button className='btn-round btn-sml' variant='outlined'><IoIosHeartEmpty/> &nbsp;ADD TO WISHLIST</Button>
                        <Button className='btn-round btn-sml ms-3' variant='outlined'><MdOutlineCompareArrows/> &nbsp;COMPARE</Button>
                    </div>
                </div>
            </div>

         </Dialog>
        </>
    )
}

export default ProductModal;