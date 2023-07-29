import { NextApiRequest, NextApiResponse } from 'next';
import { login } from '@/server/controllers/Admin';

const handler =  (req:NextApiRequest,res:NextApiResponse) =>{
    if(req.method === 'POST'){
        login(req,res)
    }
}

export default handler