import { ObjectId } from "mongodb";
import { client, jwt, secret } from "./ConfigServer";

export const findAll = async () => {
  await client.connect();
  const users = await client
    .db("database")
    .collection("user")
    .find({})
    .toArray();
  await client.close();
  return users;
};

export const findOne = async (id: any) => {
  const objectId = new ObjectId(id);
  await client.connect();
  const users = await client
    .db("database")
    .collection("user")
    .findOne({ _id: objectId });
  await client.close();
  return users;
};

export const register = async (
  firstname: string,
  lastname: string,
  username: string,
  password: string,
  phone: string,
  email: string,
  age: string,
  school: string,
) => {
  await client.connect();
  await client
    .db("database")
    .collection("user")
    .insertMany([
      {
        firstname: firstname,
        lastname: lastname,
        username: username,
        password: password,
        phone: phone,
        email: email,
        age: age,
        school: school,
        type: "Student",
        course: null,
        date: new Date(),
      },
    ]);
  await client.close();
  return { data: "ok" };
};

export const login = async (username: any, password: any) => {
  try {
    await client.connect();
    const user = await client
      .db("database")
      .collection("user")
      .findOne({ $and: [{ username: username, password: password }] });
    await client.close();
    const token = jwt.sign(
      {
        id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        username: user.username,
        password: user.password,
        phone: user.phone,
        email: user.email,
        age: user.age,
        school: user.school,
        course: user.course,
        type: user.type,
        date: user.date,
      },
      secret
    );
    return { status: 'login success', token };
  } catch (error) {
    return { status: 'login faild' };
  }
};

export const auth = async (token: any) => {
  try {
    const decoded = jwt.verify(token.split(" ")[1], secret);
    return { status: "success", decoded };
  } catch (error) {
    return { status: "error" };
  }
};


export const allMap = async() => {
  await client.connect();
  const allBooking = await client
    .db("database")
    .collection("mapbooking")
    .find({})
    .toArray();
  await client.close();
  return allBooking;
}

export const mapBooking = async (
  _id:string,
  topic:string,
  detail:string,
  lat:string,
  lnt:string,
  totalpeople:string,
  nowpeople:string,
) => {
  await client.connect();
  await client
    .db("database")
    .collection("mapbooking")
    .insertMany([
      {
        _id: _id,
        topic: topic,
        detail: detail,
        lat: lat,
        lnt: lnt,
        totalpeople: totalpeople,
        nowpeople: nowpeople,
        date: new Date(),
      },
    ]);
  await client.close();
  return { data: "ok" };
}