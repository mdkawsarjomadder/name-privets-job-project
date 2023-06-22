import React from 'react';
import './ProductCart.css'
// import imgsBoss from './product.json';

const ProductCart = ({product}) => {
      const {id, name,email, phone, image} = product; 
    
      return (
            <div className=' container-product'>
             
              <div className='  '>
              <img className='rounded-xl border-spacing-4 bg-slate-600 w-32 h-32 flex' src={image} alt="" />
              </div>
                
                  
            </div>
      );
};

export default ProductCart;