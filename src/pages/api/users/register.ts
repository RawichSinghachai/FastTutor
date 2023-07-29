import { NextApiRequest, NextApiResponse } from 'next';
import { register } from '@/server/controllers/Users';

const handler = async(req:NextApiRequest,res:NextApiResponse) =>{
    if(req.method === 'POST'){
        const {firstname,lastname,username,password,phone, email,age,school} = req.body;
        res.json(await register(firstname,lastname,username,password,phone, email,age,school))
    }
}

export default handler