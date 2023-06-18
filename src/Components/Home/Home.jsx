import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
      return (


            <nav className=''>
                  <Link to="/">Home</Link>
                  <Link to="/review">Order Review</Link>
                  <Link to="/about">About</Link>
                  <Link to="/grandpa">Grandpa</Link>
                  <Link to="/contact">Contact</Link>
            </nav>
      );
};

export default Home;