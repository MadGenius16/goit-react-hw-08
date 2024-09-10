import { createSlice } from "@reduxjs/toolkit";
import { apiAddContact, apiDeleteContact, apiGetAllContacts } from "./operations";
import { apiLogout } from "../auth/operations";


const INITIAL_STATE ={
  contacts: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
  reducers:{},
  extraReducers: (builder) => builder
  .addCase(apiGetAllContacts.pending, (state)=>{
    state.isLoading = true;
    state.error = null;
  })
  .addCase(apiGetAllContacts.fulfilled, (state, action)=>{
    state.isLoading = false;
    state.contacts = action.payload;
  })
  .addCase(apiGetAllContacts.rejected, (state, action)=>{
    state.isLoading = false;
    state.error = action.payload;
  })

  .addCase(apiAddContact.pending, ( state)=>{
    state.isLoading = true;
    state.error = null;
  })
  .addCase(apiAddContact.fulfilled, (state, action)=>{
    state.isLoading = false;
    state.contacts.push(action.payload);
  })
  .addCase(apiAddContact.rejected, (state, action)=>{
    state.isLoading = false;
    state.error = action.payload;
  })

  .addCase(apiDeleteContact.pending, (state)=>{
    state.isLoading = true;
    state.error = null;
  })
  .addCase(apiDeleteContact.fulfilled, (state, action)=>{
    state.contacts = state.contacts.filter(
      (contact) => contact.id !== action.payload.id);
  })
  .addCase(apiDeleteContact.rejected, (state, action)=>{
    state.isLoading = false;
    state.error = action.payload;
  })
  .addCase(apiLogout.pending, (state) => {
    state.error = null;
  })
  .addCase(apiLogout.fulfilled, () => {
   return INITIAL_STATE
  })
  .addCase(apiLogout.rejected, (state, action) => {
    state.error = action.payload;
  })

});

export const contactsReducer = contactsSlice.reducer