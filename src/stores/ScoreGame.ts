import { createSlice } from "@reduxjs/toolkit";
import { initialize } from "next/dist/server/lib/render-server";
import { store } from "./store";

type TypeScoreGame = {
    score:number
}

const initialState:TypeScoreGame = {
    score:0
}

export const ScoreGame = createSlice({
    name:'SubjectCardStore',
    initialState,
    reducers:{
        addScore:(state)=>{
            state.score += 1
        },
        reduceScore:(state)=>{
            if(state.score > 0){
                state.score -= 1
            }
            else{
                return {score:0}
            }
        },
        resetScore:(state)=>{
            state.score = 0
        }
    }
})

export const {addScore,reduceScore,resetScore} = ScoreGame.actions
export default ScoreGame.reducer