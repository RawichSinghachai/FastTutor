import { NextApiRequest, NextApiResponse } from 'next';
import { auth } from '@/server/controllers/Users';

const handler = async(req:NextApiRequest,res:NextApiResponse) =>{
    if(req.method === 'POST'){
        const token = req.headers.authorization;
        res.json(await auth(token))
    }
}

export default handler