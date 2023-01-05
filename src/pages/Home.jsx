import React from 'react';

import Features from "../components/Features";
import Helmet from "../components/Helmet";
import Hero from "../components/Hero";
import Category from "../components/UI/Category";
import Tabs from '../components/Tabs.jsx';
import WhyChooseUs from '../components/WhyChooseUs';
import HotPizza from '../components/HotPizza';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <Helmet title='Home'>
      <Hero />
      <Category />
      <Features />
      <Tabs />
      <WhyChooseUs />
      <HotPizza />
      <Testimonials />
    </Helmet>
  )
}

export default Home