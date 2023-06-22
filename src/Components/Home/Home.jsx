import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Head from '../Head/Head';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import Footer from '../Footer/Footer';

const Home = () => {
      return (

            <div>

                  <nav className=''>
                        <Link to="/">Home</Link>
                        <Link to="/review">Order Review</Link>
                        <Link to="/about">About</Link>
                        <Link to="/grandpa">Grandpa</Link>
                        <Link to="/contact">Contact</Link>
                  </nav>
                  <Header></Header>
                  <Head></Head>
                  <Cart></Cart>
                  <Products></Products>
                  <Footer></Footer>
            </div>

      );
};

export default Home;