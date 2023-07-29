import { NextApiRequest, NextApiResponse } from 'next';
import { login } from '@/server/controllers/Users';

const handler = async(req:NextApiRequest,res:NextApiResponse) =>{
    if(req.method === 'POST'){
        const { username, password } = req.body;
        res.json(await login(username, password))
    }
}

export default handler