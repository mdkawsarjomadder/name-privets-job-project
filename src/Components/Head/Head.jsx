import React from 'react';
import img from '../../assets/All Images/P3OLGJ1 copy 1.png';

const Head = () => {
      return (
            <div className=' container mx-auto flex justify-around p-10 '>
                  <div className=' font-semibold'>
                        <h1 className='text-3xl'>One Step <br />
                              Closer To Your <br />
                              <span className=' text-blue-400'> Dream Job</span></h1>
                              <p className='p-1 text-slate-500'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='bg-blue-500 m-1 hover:bg-blue-600 py-3 px-5 rounded-lg  border-spacing-2 text-2xl  hover:text-white '>Get Started</button>

                  </div>
                  <div>
                        <img src={img} alt="" />
                  </div>
            </div>
      );
};

export default Head;