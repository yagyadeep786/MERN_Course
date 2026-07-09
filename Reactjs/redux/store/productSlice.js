import {createSlice} from "@reduxjs/toolkit"

let ProductSlice= createSlice({
    name:"counter",
    initialState:{
        value:0
    },

    reducers:{
        increament(state,action){
            state.value++;
        },
        decreament(state,action){
            state.value--;
        },
        reset(state,action){
            state.value=0;
        },
        addAmount(state,action){
            // state.value += action.payload;
            state.value= state.value + Number(action.payload);
        }
    }
})

export default ProductSlice.reducer;

export let {increament,decreament,reset,addAmount} = ProductSlice.actions;
