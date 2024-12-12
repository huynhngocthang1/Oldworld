import ProductZoom from "../../Components/ProductZoom";
import Rating from '@mui/material/Rating';
import QuantityBox from "../../Components/QuantityBox";
import Button from '@mui/material/Button';
import { BsCartFill } from "react-icons/bs";
import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";
import Tooltip from '@mui/material/Tooltip';
import RelatedProducts from "./RelatedProducts";

const ProductDetails = () => {
    const [activeSize, setActiveSize] = useState(null);
    const [activeTabs, setActiveTabs] = useState(0);
    const isActive = (index) => {
        setActiveSize(index);
    }
    return (
        <>
            <section className="productDetails section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 ps-5">
                            <ProductZoom />
                        </div>

                        <div className="col-md-7 ps-5 pe-5">
                            <h2 className="hd text-capitalize">All Natural Italian-Style Chicken Meatballs </h2>
                            <ul className="list list-inline d-flex align-items-center">
                                <li className="list-inline-item">
                                    <div className="d-flex align-items-center">
                                        <span className="text-light mr-2">Brands : </span>
                                        <span>Welch's</span>
                                    </div>
                                </li>

                                <li className="list-inline-item d-flex align-items-center">
                                    <div className="d-flex align-items-center">
                                        <Rating name="read-only" value={4.5} precision={0.5} readOnly size="small" />
                                        <span className="text-light cursor ms-2">1 Review</span>
                                    </div>
                                </li>


                            </ul>




                            <div className="d-flex info mb-3">
                                <span className="oldPrice">$20.00</span>
                                <span className="netPrice text-danger ms-2">$14.00</span>
                            </div>

                            <span className="badge bg-success">IN STOCK</span>

                            <p className="mt-3"> Sản phẩm chất lượng, phù hợp với nhu cầu của người tiêu dùng
                                Sản phẩm chất lượng, phù hợp với nhu cầu của người tiêu dùng. Sản phẩm chất lượng, phù hợp với nhu cầu của người tiêu dùng
                                Sản phẩm chất lượng, phù hợp với nhu cầu của người tiêu dùng. Sản phẩm chất lượng, phù hợp với nhu cầu của người tiêu dùng
                            </p>

                            <div className="productSize d-flex align-items-center">
                                <span>Size / Weight: </span>
                                <ul className="list-inline-item mb-0 ps-4">
                                    <li className="list-inline-item">
                                        <a className={`tag ${activeSize === 0 ? 'active' : ''}`} onClick={() => isActive(0)}>50g</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className={`tag ${activeSize === 1 ? 'active' : ''}`} onClick={() => isActive(1)}>100g</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className={`tag ${activeSize === 2 ? 'active' : ''}`} onClick={() => isActive(2)}>200</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className={`tag ${activeSize === 3 ? 'active' : ''}`} onClick={() => isActive(3)}>300</a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a className={`tag ${activeSize === 4 ? 'active' : ''}`} onClick={() => isActive(4)}>500g</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="d-flex align-items-center mt-3">
                                <QuantityBox />
                                <Button className="btn-blue btn-lg btn-big btn-round"> <BsCartFill /> &nbsp; Add to cart</Button>
                                <Tooltip title="Add to Wishlist" placement="top">
                                    <Button className="btn-blue btn-lg btn-big btn-circle ms-4"> <FaRegHeart /></Button>
                                </Tooltip>
                                <Tooltip title="Add to compare" placement="top">
                                    <Button className="btn-blue btn-lg btn-big btn-circle ms-2"> <MdCompareArrows /></Button>
                                </Tooltip>
                            </div>
                        </div>
                    </div>

                    <br />

                    <div className="card mt-5 p-5 detailsPageTabs">
                        <div className="customTabs">
                            <ul className="list list-inline">
                                <li className="list-inline-item">
                                    <Button className={`${activeTabs === 0 && 'active'}`} onClick={() => {
                                        setActiveTabs(0)
                                    }}>Description</Button>
                                </li>
                                <li className="list-inline-item">
                                    <Button className={`${activeTabs === 1 && 'active'}`} onClick={() => {
                                        setActiveTabs(1)
                                    }}>Additional info</Button>
                                </li>
                                <li className="list-inline-item">
                                    <Button className={`${activeTabs === 2 && 'active'}`} onClick={() => {
                                        setActiveTabs(2)
                                    }}>Review (3)</Button>
                                </li>
                            </ul>

                            <br />

                            {
                                activeTabs === 0 &&
                                <div className="tabContent">
                                    <p>Chào mừng bạn đến với thế giới thời trang, nơi phong cách và chất lượng hòa quyện! Chúng tôi tự hào mang đến những bộ sưu tập áo quần hiện đại, đa dạng, phù hợp với mọi phong cách và cá tính. Từ những thiết kế thanh lịch cho công sở, đến những bộ trang phục năng động cho ngày thường, tất cả đều được làm từ chất liệu cao cấp, tạo cảm giác thoải mái và tự tin. Hãy để chúng tôi giúp bạn tỏa sáng mỗi ngày với những lựa chọn thời trang tinh tế và độc đáo nhất!</p>
                                </div>
                            }

                            {
                                activeTabs === 1 &&
                                <div className="tabContent">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr className="stand-up">
                                                <th>Stand Up</th>
                                                <td>
                                                    <p>35"L x 24"W x 37-45"H (front to back
                                                        wheel)</p>
                                                </td>
                                            </tr>
                                            <tr className="folded-wo-wheels">
                                                <th>Folded (w/o wheels)</th>
                                                <td>
                                                    <p>35"L x 24"W x 37-45"H</p>
                                                </td>
                                            </tr>
                                            <tr className="folded-w-wheels">
                                                <th>Folded (w/ wheels)</th>
                                                <td>
                                                    <p>35"L x 24"W x 37-45"H</p>
                                                </td>
                                            </tr>
                                            <tr className="door-pass-through">
                                                <th>Door Pass Througn</th>
                                                <td>
                                                    <p>24</p>
                                                </td>
                                            </tr>
                                            <tr className="frame">
                                                <th>Frame</th>
                                                <td>
                                                    <p>Aluminum</p>
                                                </td>
                                            </tr>
                                            <tr className="weight-wo-wheels">
                                                <th>Weight (w/o wheels)</th>
                                                <td>
                                                    <p>20 LBS</p>
                                                </td>
                                            </tr>
                                            <tr className="weight-wo-wheels">
                                                <th>Weight Capacity</th>
                                                <td>
                                                    <p>60 LBS</p>
                                                </td>
                                            </tr>
                                            <tr className="width">
                                                <th>Width</th>
                                                <td>
                                                    <p>24"</p>
                                                </td>
                                            </tr>
                                            <tr className="handle-height-ground-to-handle">
                                                <th>Handle height (ground to handle)</th>
                                                <td>
                                                    <p>37-45"</p>
                                                </td>
                                            </tr>
                                            <tr className="seat-back-height">
                                                <th>Seat back height</th>
                                                <td>
                                                    <p>21.5"</p>
                                                </td>
                                            </tr>
                                            <tr className="head-room-inside-canopy">
                                                <th>Head room (inside canopy)</th>
                                                <td>
                                                    <p>25"</p>
                                                </td>
                                            </tr>
                                            <tr className="pa_color">
                                                <th>Color</th>
                                                <td>
                                                    <p>Black, Blue, Red, White</p>
                                                </td>
                                            </tr>
                                            <tr className="pa_size">
                                                <th>Size</th>
                                                <td>
                                                    <p>M,S</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            }

                            {
                                activeTabs === 2 &&
                                <div className="tabContent">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <h3>Customer question & answers</h3>
                                            <br />

                                            <div className="card p-4 reviewsCard flex-row">
                                                <div className="image">
                                                    <div className="rounded-circle">
                                                        <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png" />
                                                    </div>
                                                    <span className="text-g d-block text-center font-weight-bold">
                                                        Nguyen
                                                    </span>
                                                </div>
                                                <div className="info ps-5">
                                                    <div className="d-flex align-items-center w-100">
                                                        <h5 className="text-light"> 09/09/2003</h5>
                                                        <div className="ms-auto">
                                                            <Rating name="half-rating-read" value={4.5} precision={0.5} readOnly size="small" />
                                                        </div>
                                                    </div>
                                                    <p>
                                                        Good
                                                    </p>
                                                </div>

                                            </div>

                                            <br className="res-hide" />
                                            <br className="res-hide" />

                                            <form className="reviewForm">
                                                <h4>Add a review</h4>
                                                <div className="form-group">
                                                    <textarea className="form-control" placeholder="Write a review" name="review"></textarea>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input type="text" className="form-control" placeholder="Name" name="userName" />
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <Rating name="rating" value={4.5} precision={0.5} />
                                                        </div>
                                                    </div>
                                                </div>

                                                <br />
                                                <div className="form-group">
                                                    <Button type="submit" className="btn-blue btn-lg btn-big btn-round">Submit Review</Button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>


                    <br />
                    <RelatedProducts />
                </div>
            </section>
        </>
    )
}

export default ProductDetails;