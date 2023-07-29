import { createSlice } from "@reduxjs/toolkit";
import { initialize } from "next/dist/server/lib/render-server";
import { store } from "./store";

type TypeMapBookingStore = {
    _id : string,
    topic: string,
    detail: string,
    lat: number,
    lnt: number,
    totalpeople: number,
    nowpeople: number,
}

const initialState:TypeMapBookingStore = {
    _id : '',
    topic: '',
    detail: '',
    lat: 0,
    lnt: 0,
    totalpeople: 0,
    nowpeople: 0,
}

export const MapBookingStore = createSlice({
    name:'SubjectCardStore',
    initialState,
    reducers:{
        addBooking:(state,action)=>{
            state._id = action.payload._id
            state.topic = action.payload.topic
            state.detail = action.payload.detail
            state.lat = action.payload.lat
            state.lnt = action.payload.lnt
            state.totalpeople = action.payload.totalpeople
            state.nowpeople = action.payload.nowpeople
        },
        resetBooking:(state)=>{
            state._id = ''
            state.topic = ''
            state.detail = ''
            state.lat = 0
            state.lnt = 0
            state.totalpeople = 0
            state.nowpeople = 0
        }
    }
})

export const {addBooking,resetBooking} = MapBookingStore.actions
export default MapBookingStore.reducer