import { useRoutes } from "react-router-dom/dist";
import Landing from "./Views/Landing/Landing";
import LabtestMain from "./Views/LabTest/LabtestMain";
import FaqsMain from "./Views/FAQS/FaqsMain";


export default function Router() {
    let element = useRoutes([
        {
        path:'/',
        element : <Landing /> ,
       },

       {
        path:'/lab-tests',
        element : <LabtestMain /> ,
       },
       {
        path:'/faqs',
        element : <FaqsMain/> ,
       },


    ])
    return element
}