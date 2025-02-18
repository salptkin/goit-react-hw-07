import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./filtersSlice";
import contactsReducer from "./contactsSlice";

const store = configureStore({
  reducer: {
    filters: filtersReducer,
    contacts: contactsReducer,
  },
});

export default store;
