import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import Banner from '../components/Banner';
import Mania from '../components/Mania';

const Home = () => {
    let dispatch = useDispatch();
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