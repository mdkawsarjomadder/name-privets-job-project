import React from 'react';

import Home from '../Home/Home';

const Header = () => {
      return (
            <div className='container mx-auto flex justify-around p-10 text-center'>
                  <div className=''>
                  <h2>This is a Header</h2>
                  </div>
                    <section>
                        <Home></Home>
                    </section>
                  
                  <div>
                        <button className=' bg-blue-500  hover:bg-blue-600 py-3 px-9 rounded-lg  border-spacing-2 text-2xl  hover:text-red-800 '>Boy Now</button>
                  </div>
            </div>
      );
};

export default Header;