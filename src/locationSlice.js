import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const locationSlice = createSlice({
    name: "location",
    initialState: {
        location: []
    },
    reducers: {
        getData: async (state) => {
          await  axios.get('http://192.168.100.189:3001/teapi/details/')
            .then((response) => { 
                let res = response.data.Details;
                 state.location = [...state.location ,res];
              }
            );
        },
        saveData: (state, param) => {
            const { payload } = param;
            state.location = [...state.location, payload];
        },
        deleteData: (state,param) => {
            console.log("Hello",param.payload);
            axios.get('https://api.github.com/users/mapbox')
                 .then((response) => console.log(response.data.name));
            state.location = [...state.location.slice(param.payload-1,1)];
        },
       updateData: (state, param) => {
            const { payload } = param;
            state.location = [...state.location, payload];
        },
    }
});
const { actions, reducer } = locationSlice
export const { saveData, deleteData, updateData, getData } = actions;
export default reducer;
