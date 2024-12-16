import InnerImageZoom from 'react-inner-image-zoom';
import Slider from 'react-slick';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import { useContext, useRef, useState } from 'react';
import { MyContext } from '../../App';
const ProductZoom = () => {
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

    const [slideIndexx, setSlideIndex] = useState(0);
    const zoomSliderBig = useRef();
    const zoomSlider = useRef();

    const context = useContext(MyContext);

    const goto = (index) => {
        zoomSlider.current.slickGoTo(index);
        zoomSliderBig.current.slickGoTo(index);
    }

    return (
        <div className="productZoom">
             <div className='productZoom position-relative'>
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
    )
}

export default ProductZoom;