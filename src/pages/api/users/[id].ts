import { NextApiRequest, NextApiResponse } from "next";
import { findOne } from "@/server/controllers/Users";


const handler = async(req: NextApiRequest, res: NextApiResponse) => {
  if(req.method === 'GET'){
    const id = req.query.id;
    res.json(await findOne(id))
  }
};

export default handler;
