import React from "react";
import Page from "../../components/page";
import HeroSection from "./components/HeroSection";
import Hero from "./HeroSection/Hero";
import Category from "./Cetegory/Category";
import Video from "./Video/Video";
import FounderMessage from "./components/FounderMessage";
import BenefitsofhempProduct from "./components/BenefitsofhempProduct";
import BlogsMain from "./Blogs/BlogsMain";
import ProductSample from "./ProductSample/ProductSample";
import Testimonial from "./Testimonial/Testimonial";

const Landing = () => {
  return (
    <Page title="Cali Origin">
      <Hero />
      <Category />
      <Video />

      <BenefitsofhempProduct />
      <FounderMessage />
      <BlogsMain/>
      <ProductSample/>
      <Testimonial/>
    </Page>
  );
};

export default Landing;
