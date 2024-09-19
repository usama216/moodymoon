import { useRoutes } from "react-router-dom/dist";
import Landing from "./Views/Landing/Landing";
import LabtestMain from "./Views/LabTest/LabtestMain";
import FaqsMain from "./Views/FAQS/FaqsMain";
import OurProductMain from "./Views/OurProducts/OurProductMain";
import ProductDetailMain from "./Views/ProductDetail/ProductDetailMain";
import ContactUsHero from "./Views/ContactUs/ContactUsHero";



export default function Router() {
    let element = useRoutes([
        {
        path:'/',
        element : <Landing /> ,
       },
       {
        path:'our-products',
        element : <OurProductMain /> ,
       },
       {
        path:'our-products-detail',
        element : <ProductDetailMain /> ,
       },
       {
        path:'/lab-tests',
        element : <LabtestMain /> ,
       },
       {
        path:'/faqs',
        element : <FaqsMain/> ,
       },
       {
        path:'/contactus',
        element : <ContactUsHero/> ,
       },

    ])
    return element
}