import React, { useEffect, useState } from 'react';
import ProductCart from '../ProductCart/ProductCart';

const Products = () => {
      const [produts, setproduts] = useState([]);
      // console.log(produts);
     useEffect(() =>{
           fetch('produts.json')
           .then(res => res.json())
           .then(data => setproduts(data));
     },[])
      return (
            <div className=' container mx-auto p-10'>
                 <div className=' text-center'>
                  <h3 className=' text-3xl font-semibold'>Featured Jobs</h3>
                  <p className=' text-slate-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                 </div>
                 <div className='p-5 grid grid-cols-2 gap-5'>
                {
                   produts.map(product => <ProductCart
                    key={product.id}
                    product = {product}
                   ></ProductCart>)
                }

                 </div>

            </div>
      );
};

export default Products;