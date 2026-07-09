import {configureStore} from "@reduxjs/toolkit"
import ProductReducer from "./productSlice.js"
let store= configureStore({
    reducer:{
        counter:ProductReducer,
    }
})

export default store;