import { fetchContacts, addContact, deleteContact } from "./contactsOps";
import { selectNameFilter } from "./filtersSlice";
import { createSelector } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, nameFilter) =>
        contacts.filter((contact) =>
            contact.name.toLowerCase().includes(nameFilter.toLowerCase())
    )
);

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items = [...state.items, action.payload];
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      });
  },
});

export default contactsSlice.reducer;