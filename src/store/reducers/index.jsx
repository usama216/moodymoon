import { combineReducers } from "@reduxjs/toolkit";
import adminReducer from './adminReducers'
import cartReducer from "./cartReducer";
const rootReducer = combineReducers({
    admin: adminReducer,
    cartItem:cartReducer


    
})

export default rootReducer