import { NextApiRequest, NextApiResponse } from "next";
import { mapBooking } from "@/server/controllers/Users";


const handler = async(req: NextApiRequest, res: NextApiResponse) => {
  if(req.method === 'POST'){
    const { _id, topic,detail,lat,lnt,totalpeople,nowpeople} = req.body;
    res.json(await mapBooking(_id, topic,detail,lat,lnt,totalpeople,nowpeople))
  }
};

export default handler;
