import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../auth/operations";

export const apiGetAllContacts = createAsyncThunk("contacts/getAll",
   async(_, thunkApi)=>{
    try {
      const {data} = await instance.get("contacts")
      return data
    } catch (error) {
      return thunkApi.rejectWithValue(error.message)
    }
   }
);

export const apiAddContact = createAsyncThunk("contacts/addNew",
  async(contact, thunkApi)=>{
   try {
     const {data} = await instance.post("contacts", contact)
     return data
   } catch (error) {
     return thunkApi.rejectWithValue(error.message)
   }
  }
);

export const apiDeleteContact = createAsyncThunk("contacts/delete",
  async(contactId, thunkApi)=>{
   try {
     const {data} = await instance.delete(`contacts/${contactId}`)
     return data
   } catch (error) {
     return thunkApi.rejectWithValue(error.message)
   }
  }
);

export const apiEditContact = createAsyncThunk("contacts/edit",
  async(contactId, thunkApi)=>{
   try {
     const {data} = await instance.patch(`contacts/${contactId}`)
     return data
   } catch (error) {
     return thunkApi.rejectWithValue(error.message)
   }
  }
);