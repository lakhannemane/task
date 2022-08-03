import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BaseUrl="https://mmrda.prometteur.in:5000/admin/"

export const getWork = createAsyncThunk("work/getWork", async () => {
  // const token = localStorage.getItem("token");
 axios.get(`${BaseUrl}/all-contractorwork`, {
    header: {
      Authorization:localStorage.getItem('token')
    },
  }).then((res)=>console.log(res)).catch((err)=>console.log(err))

  
  // console.log(res)
  // return res.data;
});

const workSlice = createSlice({
  name: "work",
  initialState: {
    work: [],
    status: "",
  },
  extraReducers: {
    [getWork.pending]: (state, action) => {
      state.status = "pending";
    },
    [getWork.fulfilled]: (state, action) => {
      state.work = action.payload;
      state.status = "successfull";
    },
    [getWork.rejected]: (state, action) => {
      state.state = "error";
    },
  },
});

export default workSlice;
