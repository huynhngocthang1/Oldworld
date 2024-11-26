import React, { useContext, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import Dialog from '@mui/material/Dialog';
import { IoSearch } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import Slide from '@mui/material/Slide';
import { MyContext } from '../../App';

const Transition = React.forwardRef(function Transition(props, ref) {
   return <Slide direction='up' ref={ref} {...props} />;
});

const CountryDropdown = () => {
   const [isOpenModal, setisOpenModal] = useState(false);
   const [selectedTab, setselectedTab] = useState(null);
   const [countryList, setcountryList] = useState([]);
   const [filteredCountryList, setFilteredCountryList] = useState([]);

   const context = useContext(MyContext);

   const selectCountry = (index,country) => {
      setselectedTab(index);
      setisOpenModal(false);
      context.setSelectedCountry(country);
   };

   useEffect(() => {
      // Lấy danh sách quốc gia từ context khi component mount
      if (context?.countryList) {
         setcountryList(context.countryList);
         setFilteredCountryList(context.countryList);
      }
   }, [context.countryList]); // Chỉ chạy lại nếu danh sách từ context thay đổi

   const filterList = (e) => {
      const keyword = e.target.value.toLowerCase();

      if (keyword !== "") {
         const filteredList = countryList.filter((item) =>
            item.country.toLowerCase().includes(keyword)
         );
         setFilteredCountryList(filteredList);
      } else {
         // Nếu input rỗng, hiển thị lại toàn bộ danh sách ban đầu
         setFilteredCountryList(countryList);
      }
   };

   return (
      <>
         <Button className='countryDrop' onClick={() => setisOpenModal(true)}>
            <div className='info d-flex flex-column'>
               <span className='label'>Your location</span>
               <span className='name'>{context.selectedCountry!==""? context.selectedCountry.length>10 ? context.selectedCountry?.substr(0,10)+'...' :  context.selectedCountry : 'Select Location'}</span>
            </div>
            <span className='ml-auto'><FaAngleDown /></span>
         </Button>

         <Dialog
            open={isOpenModal}
            onClose={() => setisOpenModal(false)}
            className='locationModal'
            TransitionComponent={Transition}
         >
            <h4 className='mb-0'>Choose your Delivery Location</h4>
            <p>Enter your address and we specify the offer for your area</p>
            <Button className='close_' onClick={() => setisOpenModal(false)}><MdClose /></Button>

            <div className='headerSearch w-100'>
               <input type="text" placeholder='Search your area...' onChange={filterList} />
               <Button><IoSearch /></Button>
            </div>

            <ul className='countryList mt-3'>
               {filteredCountryList.length !== 0 ? (
                  filteredCountryList.map((item, index) => (
                     <li key={index}>
                        <Button
                           onClick={() => selectCountry(index,item.country)}
                           className={`${selectedTab === index ? 'active' : ''}`}
                        >
                           {item.country}
                        </Button>
                     </li>
                  ))
               ) : (
                  <li>No results found</li>
               )}
            </ul>
         </Dialog>
      </>
   );
};

export default CountryDropdown;
