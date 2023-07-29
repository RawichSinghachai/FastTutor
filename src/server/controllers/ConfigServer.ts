import { MongoClient } from "mongodb";

export const client:any = new MongoClient(process.env.NEXT_PUBLIC_MONGODB!);

export const jwt = require("jsonwebtoken");

export const secret = process.env.NEXT_PUBLIC_SECRET;
