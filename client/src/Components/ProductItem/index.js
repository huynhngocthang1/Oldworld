import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { TfiFullscreen } from "react-icons/tfi";
import { IoMdHeartEmpty } from "react-icons/io";
import { useContext, useState } from 'react';
import { MyContext } from '../../App';
const ProductItem = (props)=>{

  const context = useContext(MyContext);

  const viewProductDetails=(id)=>{
       context.setisOpenProductModal(true);
  }

  
    return (
       <>
        <div className={`productItem ${props.itemView}`}>
                <div className="imgWrapper">
                    <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg" className="w-100"/>

                    <span className="badge badge-primary">28%</span>

                      <div className="actions">
                        <Button onClick={()=>viewProductDetails(1)}><TfiFullscreen/></Button>
                        <Button><IoMdHeartEmpty style={{fontSize:'20px'}}/></Button>
                      </div>
                </div>
                                <div className="info">
                                  <h4>Werther's Original Caramel Hard Candies</h4>
                                  <span className="text-success d-block">In Stock</span>
                                  <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5}/>

                                  <div className="d-flex">
                                    <span className="oldPrice">$20.00</span>
                                    <span className="netPrice text-danger ml-2">$14.00</span>
                                  </div>
                                </div>
                            </div>

                

                {/* <ProductModal/> */}
        </>
    )
}

export default ProductItem;