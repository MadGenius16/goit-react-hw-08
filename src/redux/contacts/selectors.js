import { createSelector } from "@reduxjs/toolkit"
import { selectFilterName, selectNumberFilter } from "../filters/selectors"

export const selectUserContacts = (state) => state.contacts.contacts
export const selectUserContactsIsLoading = (state) => state.contacts.isLoading
export const selectUserContactsError = (state) => state.contacts.error

export const selectFilteredContacts = createSelector(
  [selectUserContacts, selectFilterName, selectNumberFilter],
  (contacts, filter)=> {
    return contacts.filter((contact)=> 
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
  }
)