import React, { useEffect, } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { save } from '../stores/UserDataStore';
import { RootState } from '@/stores/store';
import { useRouter } from 'next/router'
type Props = {}

const Checkdata = (props: Props) => {
    const router = useRouter()
    const dispatch = useDispatch()
    // console.log(router.pathname);
useEffect(() => {

    //send datauser from database to reducx


    axios.post(`${process.env.NEXT_PUBLIC_URL}/api/users/auth`, {
        token: sessionStorage.getItem('token')
    },
        { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } }
    ).then(datauser => {
        dispatch(save(datauser.data))
        console.log(datauser.data);
    }).catch((err) => {
        console.log('Not login in yet')
        //for test
    })

        //when forget login block '/profile' 
    
    if(!sessionStorage.getItem('token')){
        if(router.pathname === '/profile'){
            router.push('/')
        }  
    }



    //block student to access admin
    // if (userdata.type === 'Student' && router.pathname === '/pathtoblock') {
    //     router.back();
    // }


    //check path for student to access course

    // if (mycourse) {
    //     if (router.pathname.split('/')[1] === 'classroom') {
    //         let back: boolean = false
    //         for (let i = 0; i < userdata.course.length; i++) {
    //             if (userdata.course[i] === mycourse) {
    //                 back = true
    //             }
    //             userdata.course[i];
    //         }

    //         if (!back) {
    //              router.push('/course')
    //         }
    //     }
    // }


},[])

    return (
        <>
        </>
    )
}

export default Checkdata