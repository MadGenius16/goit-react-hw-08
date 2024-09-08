import { createSlice } from "@reduxjs/toolkit";
import { apiGetAllContacts } from "./operations";


const INITIAL_STATE ={
  contacts: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
  reducers:{},
  extraReducers: builder=> builder
  .addCase(apiGetAllContacts.pending, (state)=>{
    state.isLoading = true;
    state.error = null;
  })
  .addCase(apiGetAllContacts.fulfilled, (action, state)=>{
    state.isLoading = false;
    state.contacts = action.payload;
  })
  .addCase(apiGetAllContacts.rejected, (action, state)=>{
    state.isLoading = false;
    state.error = action.payload;
  })
});

export const contactsReducer = contactsSlice.reducer