import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://67b34128392f4aa94fa6808b.mockapi.io/api/v1/contacts";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const res = await axios.get(URL);
            return res.data;
        }   catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (newContact, thunkAPI) => {
        try {
            const res = await axios.post(URL, newContact);
            return res.data;
        }   catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (id, thunkAPI) => { 
        try {
            await axios.delete(`${URL}/${id}`);
            return id;
        }   catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);