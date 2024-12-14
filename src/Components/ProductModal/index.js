import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import { MdClose } from "react-icons/md";
import Rating from '@mui/material/Rating';




import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import QuantityBox from '../QuantityBox';
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineCompareArrows } from "react-icons/md";
import { useContext, useRef } from 'react';
import { MyContext } from '../../App';
import InnerImageZoom from 'react-inner-image-zoom';
import Slider from 'react-slick';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import ProductZoom from '../ProductZoom';
import { IoCart } from "react-icons/io5";

const ProductModal =(props)=>{

    const zoomSliderBig = useRef();
    const zoomSlider = useRef();

    const context = useContext(MyContext);

    return (
        <>
        <Dialog
            open={true} className="productModal" onClose={()=>context.setisOpenProductModal(false)} >          
            <Button className='close_'  onClick={()=>context.setisOpenProductModal(false)} ><MdClose /></Button>
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
                   <ProductZoom/>
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
                        <Button className='btn-blue btn-lg btn-big btn-round ms-3'><IoCart/>Add to Cart</Button>
                    </div>


                    <div className='d-flex align-items-center mt-5 actions'>
                        <Button className='btn-round btn-sml' variant='outlined'><IoIosHeartEmpty/> &nbsp;ADD TO WISHLIST 1</Button>
                        <Button className='btn-round btn-sml ms-3' variant='outlined'><MdOutlineCompareArrows/> &nbsp;COMPARE</Button>
                    </div>
                </div>
            </div>

         </Dialog>
        </>
    )
}

export default ProductModal;