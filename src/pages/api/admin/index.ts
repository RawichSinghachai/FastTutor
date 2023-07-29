import { NextApiRequest, NextApiResponse } from 'next';
import { findAdmin } from '@/server/controllers/Admin';

const handler = (req:NextApiRequest,res:NextApiResponse) =>{
    if(req.method === 'GET'){
        findAdmin(req,res)
    }
}

export default handler