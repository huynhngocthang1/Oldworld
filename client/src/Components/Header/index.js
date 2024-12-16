import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo1.png';
import CountryDropdown from '../CountryDropdown';
import Button from '@mui/material/Button';
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import SearchBox from './SearchBox';
import Navigation from './Navigation';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { MyContext } from '../../App';
import { useContext } from 'react';


const Header =()=> {

    const context = useContext(MyContext);

    return(
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-blue">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center">Chào mừng các bạn đã đến với website bán đồ cũ của chúng tôi</p>
                    </div>
                </div>
                <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper d-flex align-items-center col-sm-2">
                                <Link to={'/'}><img src={Logo} alt='Logo'></img></Link>
                            </div>
                            <div className='col-sm-10 d-flex align-items-center part2'>

                                {
                                    context.countryList.length!==0 && <CountryDropdown/>
                                }

                                
                                <SearchBox/>

                                <div className='part3 d-flex align-items-center ms-auto'>
                                    
                                    {
                                        
                                        context.isLogin!==true ?  <Link to="/signIn"> <Button className='btn-blue btn-round me-3'>Sign In</Button></Link> :
                                        <Button className='circle me-3'><FiUser /></Button>
                                    }
                                    
                                    
                
                                   <div className='cartTab d-flex align-items-center'>
                                   <span className='price'>$3.29</span>
                                   <div className='position-relative ml-2'>
                                   <Link to="/Cart/1"><Button className='circle'><IoBagOutline /></Button></Link>
                                   <span className='count d-flex align-items-center justify-content-center'>1</span>
                                   </div>
                                 </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </header>
                <Navigation/>
            </div>
        </>
    )
}
export default Header;