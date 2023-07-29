import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

type UserType = {
    id:string
    firstname:string,
    lastname:string,
    username:string,
    password:string,
    phone:string,
    email:string,
    age:string,
    school:string,
    course:string[],
    type:string,
    date:string
    statuslogin:boolean,
}

const initialState:UserType = {
    id:'',
    firstname:'',
    lastname:'',
    username:'',
    password:'',
    phone:'',
    email:'',
    age:'',
    school:'',
    course:[],
    type:'',
    date:'',
    statuslogin:false,
}

export const UserDataStore = createSlice({
    name:'UserDataStore',
    initialState,
    reducers:{
        save:(state,action: PayloadAction<any>)=>{
            state.id = action.payload.decoded.id
            state.firstname = action.payload.decoded.firstname
            state.lastname = action.payload.decoded.lastname
            state.username = action.payload.decoded.username
            state.password = action.payload.decoded.password
            state.phone = action.payload.decoded.phone
            state.email = action.payload.decoded.email
            state.age = action.payload.decoded.age
            state.school = action.payload.decoded.school
            state.course = action.payload.decoded.course
            state.type = action.payload.decoded.type
            state.date = action.payload.decoded.date
            
            if(action.payload.status === 'success'){
                state.statuslogin = true
            }
            
        },
        checkcourse:(state,action)=>{
            
        },
    }
})

export const {save,checkcourse} = UserDataStore.actions
export default UserDataStore.reducer