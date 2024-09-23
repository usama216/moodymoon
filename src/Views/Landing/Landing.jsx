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
import ProductFeature from "./ProductFeature/productFeature";
import { Box } from "@mui/material";



const Landing = () => {
  return (
    <Page title="Moody Moon">
     {/* <Box sx={{overflow:'hidden'}}> */}
     <Hero />
      <Category />
      <Video />

      <BenefitsofhempProduct />
      <FounderMessage />
      <BlogsMain/>
      <ProductFeature/>
      
      <Testimonial/>
     {/* </Box> */}
    </Page>
  );
};

export default Landing;
