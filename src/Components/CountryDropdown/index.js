import React, { useContext, useEffect } from 'react';
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { IoSearch } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { useState } from 'react';
import Slide from '@mui/material/Slide';
import { MyContext } from '../../App';

const Transition = React.forwardRef(function Transition(props, ref){
   return <Slide direction='up' ref={ref} {...props} />;
});

const CountryDropdown =()=> {
   const [isOpenModal, setisOpenModal] = useState(false);

   const [selectedTab, setselectedTab] = useState(null);

   const [countryList, setcountryList] = useState([]);

   const context = useContext(MyContext);

   const selectCountry = (index)=>{
   setselectedTab(index);
   setisOpenModal(false);
   }

   useEffect(()=>{
      setcountryList(context.countryList);
   })

   const filterList =(e)=>{
      const keyword = e.target.value.toLowerCase();

   }

    return(
        <>
        <Button className=' countryDrop' onClick={()=>setisOpenModal(true)}>
           <div className='info d-flex flex-column'>
              <span className='label'>Your location</span>
              <span className='name'>Vietnam</span>
           </div>
           <span className='ml-auto'><FaAngleDown/></span>
        </Button>

        <Dialog  open={isOpenModal} onClose={()=>setisOpenModal(false)} 
        className='locationModal' TransitionComponent={Transition}>
           <h4 className='mb-0'>Choose your Delivery Location</h4>
           <p>Enter your address and we specify the offer for your area</p>
           <Button className='close_' onClick={()=>setisOpenModal(false)}><MdClose/></Button>

            <div className='headerSearch w-100'>
            <input type="text" placeholder='Search your area...' onChange={filterList} />
                 <Button><IoSearch /></Button>
        </div>
           <ul className='countryList mt-3'>
            {
               context.countryList?.length!== 0 && context.countryList?.map((item,index)=>{
                  return (
                     <li key={index}><Button onClick={()=>selectCountry(index)}
                         className={`${selectedTab===index ? 'active' : ''}`}
                     >{item.country}</Button></li>
                  )
               })
            }
            
            
           </ul>  
       </Dialog>
        </>
    )
}

export default CountryDropdown;