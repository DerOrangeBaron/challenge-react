import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../commons/apiRequests";

const initialState = {
  characters: [],
  character: {},
  loading: false,
  page: { actualPage: 1 },
};

export const getCharacters = createAsyncThunk(
  "rickAndMorty/getCharacters",
  async (nextPage) => {
    const response = await API.getCharacters(nextPage);
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);

export const getCharacter = createAsyncThunk(
  "rickAndMorty/getCharacter",
  async (id) => {
    const response = await API.getCharacter(id);
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);

export const characterSlice = createSlice({
  name: "rickAndMorty",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCharacters.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getCharacters.fulfilled, (state, action) => {
      state.characters = action.payload.results;
      state.page = {
        ...action.payload.info,
        actualPage: getPageNumber(action.payload.info),
      };
      state.loading = false;
    });
    builder.addCase(getCharacter.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getCharacter.fulfilled, (state, action) => {
      state.character = action.payload;
      state.loading = false;
    });
  },
});

const getPageNumber = (pageInfo) => {
  console.log(pageInfo);
  if (pageInfo.next != undefined) {
    const pageNumber = pageInfo.next.split("=")[1];
    return pageNumber - 1;
  } else {
    return pageInfo.pages;
  }
};

export const selectCharacters = (state) => state.rickAndMorty.characters || [];
export const selectCharacter = (state) => state.rickAndMorty.character || {};
export const selectLoading = (state) => state.rickAndMorty.loading || false;
export const selectPage = (state) => state.rickAndMorty.page || {};

export default characterSlice.reducer;
