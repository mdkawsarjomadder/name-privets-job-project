import React from 'react';
import Home from '../Home/Home';
import Nave from '../Nave/Nave';
const Header = () => {
      return (
            <div className='container mx-auto flex justify-around p-10'>
                  <div className=' '>
                        <h2 className=' text-3xl font-extrabold' >CareerHub</h2>
                  </div>
                         <div>
                            <Nave></Nave>
                         </div>

                  <div className=''>
                        <button  className=' bg-blue-500  hover:bg-blue-600 py-3 px-9 rounded-lg  border-spacing-2 text-2xl  hover:text-red-800 '>Boy Now</button>
                  </div>
            </div>
      );
};

export default Header;