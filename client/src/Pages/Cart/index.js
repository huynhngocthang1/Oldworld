import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import QuantityBox from '../../Components/QuantityBox';
import { IoIosClose } from "react-icons/io";
import Button from '@mui/material/Button';
import { IoCart } from "react-icons/io5";

const Cart = () => {
  return (
    <>
     <section class="section cartPage py-5">
  <div class="container">
  <h2 class="fw-bold text-start mb-3">YOUR CART</h2>
  <p class="text-muted">There are <b className="text-red">3</b> products in your cart</p>
    <div class="row g-3">
      {/* <!-- Phần giỏ hàng --> */}
      <div class="col-md-9 pe-5">       

        <div class="table-responsive">
          <table class="table table-striped table-hover table-bordered rounded">
            <thead class="bg-light">
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Unit price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Subtotal</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Link to="/product/1">
                  <div className="d-flex align-items-center cartItemimgWrapper">
                    <div className="imgWrapper">
                      <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg" className="w-100"/>
                    </div>

                    <div className="info px-3">
                      <h6>Field Roast Chao Cheese Creamy Original</h6>
                      <Rating name="read-only" value={4.5} readOnly precision={0.5} size="small" />
                    </div>
                  </div>
                  </Link>
                </td>
                <td>$10</td>
                <td>
                    <QuantityBox/>
                </td>
                <td>$20</td>
                <td>
                  <span className="remove"><IoIosClose/></span>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="/product/1">
                  <div className="d-flex align-items-center cartItemimgWrapper">
                    <div className="imgWrapper">
                      <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg" className="w-100"/>
                    </div>

                    <div className="info px-3">
                      <h6>Field Roast Chao Cheese Creamy Original</h6>
                      <Rating name="read-only" value={4.5} readOnly precision={0.5} size="small" />
                    </div>
                  </div>
                  </Link>
                </td>
                <td>$10</td>
                <td>
                    <QuantityBox/>
                </td>
                <td>$20</td>
                <td>
                  <span className="remove"><IoIosClose/></span>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="/product/1">
                  <div className="d-flex align-items-center cartItemimgWrapper">
                    <div className="imgWrapper">
                      <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg" className="w-100"/>
                    </div>

                    <div className="info px-3">
                      <h6>Field Roast Chao Cheese Creamy Original</h6>
                      <Rating name="read-only" value={4.5} readOnly precision={0.5} size="small" />
                    </div>
                  </div>
                  </Link>
                </td>
                <td>$10</td>
                <td>
                    <QuantityBox/>
                </td>
                <td>$20</td>
                <td>
                  <span className="remove"><IoIosClose/></span>
                </td>
              </tr>
              <tr>
                <td>
                  <Link to="/product/1">
                  <div className="d-flex align-items-center cartItemimgWrapper">
                    <div className="imgWrapper">
                      <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg" className="w-100"/>
                    </div>

                    <div className="info px-3">
                      <h6>Field Roast Chao Cheese Creamy Original</h6>
                      <Rating name="read-only" value={4.5} readOnly precision={0.5} size="small" />
                    </div>
                  </div>
                  </Link>
                </td>
                <td>$10</td>
                <td>
                    <QuantityBox/>
                </td>
                <td>$20</td>
                <td>
                  <span className="remove"><IoIosClose/></span>
                </td>
              </tr>
              <tr>
                <td>Another Product</td>
                <td>$15</td>
                <td>
                  <QuantityBox/>
                </td>
                <td>$15</td>
                <td>
                  <span className="remove"><IoIosClose/></span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* <!-- Phần thanh toán --> */}
      <div class="col-md-3">
       <div className="card shadow border p-3 cartDetails">
           <h4>CART TOTALS</h4>

           <div className="d-flex align-items-center mb-3">
            <span>Subtotal</span>
            <span className="ms-auto text-red fw-bold">12.15$</span>
           </div>
           <div className="d-flex align-items-center mb-3">
            <span>Shipping</span>
            <span className="ms-auto"><b>Free</b></span>
           </div>
           <div className="d-flex align-items-center mb-3">
            <span>Estimate for</span>
            <span className="ms-auto"><b>VietNam</b></span>
           </div>
           <div className="d-flex align-items-center">
            <span>Total</span>
            <span className="ms-auto text-red fw-bold">12.15$</span>
           </div>

           <br/>
           <Button className='btn-blue btn-lg btn-big'> <IoCart/>Add to Cart</Button>
       </div>
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default Cart;
