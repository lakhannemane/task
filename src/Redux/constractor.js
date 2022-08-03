import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BaseUrl="https://mmrda.prometteur.in:5000/admin/"

export const getContractor = createAsyncThunk("work/getWork", async () => {
  // const token = localStorage.getItem("token")
  let res = await axios.get(`${BaseUrl}/all-contractor`, {
    header: {
      Authorization: localStorage.getItem("token"),
    },
  });

  return res.data;
});

const contractSlice = createSlice({
  name: "work",
  initialState: {
    contractorList: [],
    status: "",
  },
  extraReducers: {
    [getContractor.pending]: (state, action) => {
      state.status = "pending";
    },
    [getContractor.fulfilled]: (state, action) => {
      state.contractorList = action.payload;
      state.status = "successfull";
    },
    [getContractor.rejected]: (state, action) => {
      state.state = "error";
    },
  },
});

export default contractSlice.reducer;
