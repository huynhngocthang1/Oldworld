import Sidebar from "../../Components/Sidebar";

const Listing = ()=>{
    return (
        <>
         <section className="product_Listing-Page">
            <div className="container">
                <div className="productListing d-flex">
                    <Sidebar/>

                    <div className="content_right">contentright</div>
                </div>
            </div>
         </section>
        </>
    )
}

export default Listing;