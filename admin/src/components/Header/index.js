import { Link } from "react-router-dom";
import logo1 from '../../assets/images/logo1.png'

const Header = () => {
    return(
        <>
        <header>
            <div className="container-fluid">
                <div className="row">
                    {/*Logo Wrapper */}
                    <div className="col-xs-3">
                        <Link to={"/"}><img src={logo1}/></Link>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header;