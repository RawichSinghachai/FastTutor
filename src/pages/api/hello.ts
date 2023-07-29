// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  url: string
  mongo:string
  test:string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ url: process.env.NEXT_PUBLIC_URL! ,mongo:process.env.NEXT_PUBLIC_MONGODB!,
   test:process.env.TEST_DATA!})
}
