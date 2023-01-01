import React from 'react';

import Features from "alias-components/Features";
import Helmet from "alias-components/Helmet";
import Hero from "alias-components/Hero";
import Category from "alias-components/UI/Category";
import Tabs from 'alias-components/Tabs.jsx';
import WhyChooseUs from 'alias-components/WhyChooseUs';
import HotPizza from 'alias-components/HotPizza';
import Testimonials from 'alias-components/Testimonials';

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