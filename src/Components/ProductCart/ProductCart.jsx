import React from 'react';
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid'

import './ProductCart.css'


const ProductCart = ({ product }) => {
      const { name, username, location, locationTwo, image, city } = product;

      return (
            <div className=' rounded-md border-4 border-sky-100 p-2 m-2'>

                  <div className=' p-2'>
                        <img className='rounded-lg bg-slate-600 w-36 h-36' src={image} alt="" />
                        <p className=' text-2xl '>{name}</p>
                        <p className='p-1'>{username}</p>
                        <div className='flex gap-5 p-1'>
                              <button className='border-2 rounded-md border-blue-300 py-2 px-8'>Remote</button>
                              <button className='border-2 rounded-md border-blue-300 py-2 px-8'>Full Time</button>
                        </div>
                        <div className='flex gap-5 p-1'>
                              <div className=' flex gap-2'>
                                    <span className=''>  <MapPinIcon className="h-5 w-5  text-white-200 " /> </span>
                                    <p> Dhaka, Bangladesh</p>
                                    </div>
                              <div className='flex gap-2'>
                                    <span className=''>  <CurrencyDollarIcon className="h-5 w-5 text-white-200" />
                                    </span>
                                    <p > Salary : 100K - 150K</p>
                              </div>
                        </div>
                        <button className='p-2 border-2 rounded-md border-blue-500 py-2 px-8 bg-blue-600 '> View Details
                        </button>

                  </div>



            </div>
      );
};

export default ProductCart;