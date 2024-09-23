import { useRoutes } from "react-router-dom/dist";
import Landing from "./Views/Landing/Landing";
import LabtestMain from "./Views/LabTest/LabtestMain";
import FaqsMain from "./Views/FAQS/FaqsMain";
import OurProductMain from "./Views/OurProducts/OurProductMain";
import ProductDetailMain from "./Views/ProductDetail/ProductDetailMain";
import ContactUsMain from "./Views/ContactUs/ContactUsMain";
import ShoppingCartMain from "./Views/ShoppingCart/ShoppingCartMain";
import CheckOutMain from "./Views/CheckOutwithPaymentPage/CheckOutMain";



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
        path:'/shopping-cart-details',
        element : <ShoppingCartMain/> ,
       },

       {
        path:'/checkout',
        element : <CheckOutMain/> ,
       },

    ])
    return element
}