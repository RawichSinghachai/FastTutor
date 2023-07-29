import { NextApiRequest, NextApiResponse } from "next";
import { client, jwt, secret } from "./ConfigServer";


export const findAdmin = async (req: NextApiRequest, res: NextApiResponse) => {
  await client.connect();
  const admin = await client
    .db("database")
    .collection("admin")
    .find({})
    .toArray();
  await client.close();
  res.json(admin);
};

export const register = async (req: NextApiRequest, res: NextApiResponse) => {
  const { username, password, email } = req.body;
  await client.connect();
  await client
    .db("database")
    .collection("admin")
    .insertMany([
      {
        username: username,
        password: password,
        email: email,
        type: "Admin",
      },
    ]);

  await client.close();
};

export const login = async (req: NextApiRequest, res: NextApiResponse) => {
  const { username, password } = req.body;
  await client.connect();
  try {
    const admin = await client
      .db("database")
      .collection("admin")
      .findOne({ $and: [{ username: username }, { password: password }] });
    await client.close();
    const token = jwt.sign(
      { username: admin.username, email: admin.email, type: admin.type },
      secret
    );
    res.json({ token });
  } catch (error) {
    res.json({ status: "Faild" });
  }
};

export const auth = async (req: any, res: NextApiResponse) => {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token.split(" ")[1], secret);
    res.json({ status: "success", decoded });
  } catch (error) {
    res.json({ status: "error" });
  }
};
