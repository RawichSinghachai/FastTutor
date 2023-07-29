import { createSlice } from "@reduxjs/toolkit";
import { initialize } from "next/dist/server/lib/render-server";
import { store } from "./store";

type TypeScoreGame = {
    cart:number
}

const initialState:TypeScoreGame = {
    cart:0
}

export const ScoreGame = createSlice({
    name:'SubjectCardStore',
    initialState,
    reducers:{
        addCart:(state)=>{
            state.cart += 1
        },
        reduceCart:(state)=>{
            if(state.cart > 0){
                state.cart -= 1
            }
            else{
                return {cart:0}
            }
        },
        resetCart:(state)=>{
            state.cart = 0
        }
    }
})

export const {addCart,reduceCart,resetCart} = ScoreGame.actions
export default ScoreGame.reducer