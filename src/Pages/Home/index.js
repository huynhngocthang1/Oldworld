import HomeBanner from "../../Components/HomeBanner";

const Home =()=> {
    return(
        <>
         <HomeBanner/>

         <section className="HomeProducts">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="banner">
                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/banner-box.jpg" className="cursor"/>
                        </div>
                    </div>
                    <div className="col-md-3">
                    </div>
                </div>
            </div>
         </section>
        </>
    )
}
export default Home;