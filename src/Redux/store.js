import { configureStore } from "@reduxjs/toolkit";
import contractorSlice from "./constractor";
import userSlice from "./User";
import workSlice from "./work";

export const BaseUrl="https://mmrda.prometteur.in:5000/admin/"


const store = configureStore({
    reducer:{
        user:userSlice,
        contractor:contractorSlice,
        work:workSlice
    }
})

export default store;