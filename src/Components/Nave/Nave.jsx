import React from 'react';
import { Link } from 'react-router-dom';


const Nave = () => {
      return (
            <div className=' container mx-auto text-center p-5'>
                  <nav className='flex gap-5 text-2xl'>
                            <Link className=' text-yellow-500' to="/">Home</Link>
                            <Link to="/applied">Applied Jobs</Link>
                            <Link to="/staistics">Statistics</Link>
                            <Link to="/blog" >Blog</Link>
                  </nav>
            </div>
      );
};

export default Nave;