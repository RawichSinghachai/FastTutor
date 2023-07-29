import { NextApiRequest, NextApiResponse } from 'next';
import { findAll } from '@/server/controllers/Users';

const handler = async(req:NextApiRequest,res:NextApiResponse) =>{
    if(req.method === 'GET'){ 
        res.json(await findAll())
    }
    else if(req.method === 'PUT'){

    }
}

export default handler