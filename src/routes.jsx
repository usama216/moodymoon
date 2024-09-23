import { useRoutes } from "react-router-dom/dist";
import Landing from "./Views/Landing/Landing";
import LabtestMain from "./Views/LabTest/LabtestMain";
import FaqsMain from "./Views/FAQS/FaqsMain";
import OurProductMain from "./Views/OurProducts/OurProductMain";
import ProductDetailMain from "./Views/ProductDetail/ProductDetailMain";
import ContactUsMain from "./Views/ContactUs/ContactUsMain";
import SignIn from "./Views/Authentication/SignIn";
import SignUp from "./Views/Authentication/SignUp";
import RestPassword from "./Views/Authentication/RestPassword";



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
        path:'/product-details/:id',
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
        element : <ContactUsMain/> ,
       },
       {
        path:'/login',
        element : <SignIn/> ,
       },
       {
        path:'/sign-up',
        element : <SignUp/> ,
       },
       {
        path:'/rest-password',
        element : <RestPassword/> ,
       },


    ])
    return element
}