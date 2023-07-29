import { NextApiRequest, NextApiResponse } from "next";
import { allMap } from "@/server/controllers/Users";


const handler = async(req: NextApiRequest, res: NextApiResponse) => {
  if(req.method === 'GET'){
    res.json(await allMap())
  }
};

export default handler;