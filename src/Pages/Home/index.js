import HomeBanner from "../../Components/HomeBanner";

const Home =()=> {
    return(
        <>
         <HomeBanner/>

         <section className="HomeProducts">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        
                    </div>
                    <div className="col-md-3">
                        <img src="https://kbltheme.com/bacola/wp-content/uploads/2021/04/banner-box.jpg" className="cursor"/>
                    </div>
                </div>
            </div>
         </section>
        </>
    )
}
export default Home;