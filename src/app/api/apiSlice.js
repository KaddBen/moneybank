import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://argentbank-8b3a98701957.herokuapp.com/api/v1/user",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);   
    }
    return headers;
  },
});


export const apiSlice = createApi({
  baseQuery: baseQuery,
  endpoints: (builder) => ({}),
 
});
