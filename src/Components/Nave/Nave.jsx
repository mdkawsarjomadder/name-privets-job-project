import React from 'react';


const Nave = () => {
      return (
            <div className=' container mx-auto text-center p-5'>
                  <nav className=''>
                     <ul className='flex gap-5 text-2xl'>
                        <li className=' text-yellow-500'>
                              <a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/setting">Setting</a></li>
                        <li><a href="/blog">Blog</a></li>
                     </ul>
                  </nav>
            </div>
      );
};

export default Nave;