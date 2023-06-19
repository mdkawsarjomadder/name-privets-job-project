import React from 'react';
import { BeakerIcon, BriefcaseIcon, LightBulbIcon } from '@heroicons/react/24/solid'


const Cart = () => {
      return (
            <div className=' container mx-auto  p-5'>

                  <div className='text-center'>
                        <h2 className='text-3xl font-semibold  '>Job Category List</h2>
                        <p className='p-1 text-1xl text-slate-400'>Explore thousands of job opportunities with all the information you need. Its your future</p>

                  </div>
                  <div className=' flex justify-evenly gap-2'>
            
                        <div className=' bg-slate-200 border-dashed rounded-xl p-9 m-9'>
                              <span className='p-1'> <BriefcaseIcon className=" bg-slate-400 h-9 w-9 rounded-lg text-black-300" /> </span>
                              <h4 className='text-black-300  font-bold'>Account & Finance</h4>
                              <p className=' text-slate-400'>300 Jobs Available</p>
                        </div>
                        <div className=' bg-slate-200 border-dashed rounded-xl p-9 m-9'>
                              <span className='p-1'> <LightBulbIcon className=" bg-slate-400 h-9 w-9 rounded-lg text-black-300" /> </span>
                              <h4 className='text-black-300  font-bold'>Creative Design</h4>
                              <p className=' text-slate-400'>100+ Jobs Available</p>
                        </div>
                        <div className=' bg-slate-200 border-dashed rounded-xl p-9 m-9'>
                              <span className='p-1'> <BriefcaseIcon className=" bg-slate-400 h-9 w-9 rounded-lg text-black-300" /> </span>
                              <h4 className='text-black-300  font-bold'>Marketing & Sales</h4>
                              <p className=' text-slate-400'>150 Jobs Available</p>
                        </div>
                        <div className=' bg-slate-200 border-dashed rounded-xl p-9 m-9'>
                              <span className='p-1'> <BriefcaseIcon className=" bg-slate-400 h-9 w-9 rounded-lg text-black-300" /> </span>
                              <h4 className='text-black-300  font-bold'>Engineering Job</h4>
                              <p className=' text-slate-400'>224 Jobs Available</p>
                        </div>
                      
                  </div>
            </div>

      );
};

export default Cart;