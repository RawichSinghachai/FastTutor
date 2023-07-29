import { createSlice } from "@reduxjs/toolkit";
import qoogle from '../../public/icon/qoogle.png'
import cat from '../../public/icon/cat.png'
import bird from '../../public/icon/bird.png'
import shark from '../../public/icon/shark.png'
import plug from '../../public/icon/plug.png'
import shower from '../../public/icon/shower.png'

const initialState = [
  {topic:'PAT1',duration:'30 Hour',price:'3500 Bath',image:qoogle},
  {topic:'PAT2',duration:'25 Hour',price:'2000 Bath',image:cat},
  {topic:'PAT3',duration:'42 Hour',price:'4500 Bath',image:bird},
  {topic:'PAT4',duration:'50 Hour',price:'6000 Bath',image:shark},
  {topic:'PAT5',duration:'30 Hour',price:'3500 Bath',image:plug},
  {topic:'PAT6',duration:'25 Hour',price:'2000 Bath',image:shower},
  // {topic:'PAT7',duration:'42 Hour',price:'4500 Bath'},
  // {topic:'PAT8',duration:'50 Hour',price:'6000 Bath'},
]


export const SubjectCardStore = createSlice({
    name:'SubjectCardStore',
    initialState,
    reducers:{

    }
})


export default SubjectCardStore.reducer