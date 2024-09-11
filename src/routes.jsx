import { useRoutes } from "react-router-dom/dist";
import Landing from "./Views/Landing/Landing";
import LabtestMain from "./Views/LabTest/LabtestMain";


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


    ])
    return element
}