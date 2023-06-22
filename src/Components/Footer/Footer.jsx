import React from 'react';
// import Imgs from '../../assets/Icons/Group-4.png';
import incon from '../../assets/Icons/Group 9969.png'


const Footer = () => {
      return (
            <div className='p-10 bg-black text-white  h-full'>
                <div className='container mx-auto flex justify-around  gap-5'>
                <div>
                <h2 className=' text-3xl font-bold'>CareerHub</h2>
                <p className=' p-2 w-48 font-sans'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
               <img className=' w-24 m-1' src={incon} alt="" />
                </div>
                <div>
                <h2 className=' text-2xl font-bold'>Company</h2>
                <p className='p-1'>About Us</p>
                <p className='p-1'>Work</p>
                <p className='p-1'>Latest News</p>
                <p className='p-1'>Careers</p>
                </div>
                <div>
                <h2 className='text-3xl font-bold'>Product</h2>
                <p className='p-1'>Prototype</p>
                <p className='p-1'>Plans & Pricing</p>
                <p className='p-1'>Customers</p>
                <p className='p-1'>Integrations</p>
                </div>
                <div>
                <h2 className='text-3xl font-bold'>Support</h2>
                 <p className='p-1'> Help Desk</p>
                 <p className='p-1'> Sales</p>
                 <p className='p-1'>Become a Partner </p>
                 <p className='p-1'> Developers</p>
                </div>
                <div>
                <h2 className='text-3xl font-bold'>Contact</h2>
                <p className='p-1'>524 Broadway , NYC </p>
                <p className='p-1'> +1 777 - 978 - 5570</p>
              
                </div>
                </div>
            </div>
      );
};

export default Footer;