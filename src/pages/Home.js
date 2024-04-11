import React from 'react'
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import Banner from '../components/Banner';
import Mania from '../components/Mania';

const Home = () => {
    
  return (
    <main className="min-h-screen">
      <Hero />
      <Banner />
      <Mania />
      <FeaturedProducts />
    </main>
  );
}


export default Home