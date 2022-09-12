import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import joi from "joi";
import db from "../db.js";
import { ObjectId } from "mongodb";


const postSchema = joi.object({
  description: joi.string().required(),
  value: joi.number().required(),
});

export async function createPost(req, res) {
  const validation = postSchema.validate(req.body, { abortEarly: false });
  if (validation.error) {
    const erros = validation.error.details.map((detail) => detail.message);
    res.status(422).send(erros);
    return;
  };

 const sessions = await db.collection("sessions").findOne({token})
const user = await db.collection("users").findOne({_id: sessions.userId})

try {
  await collection("in-out-put").insertOne({
    date: dayjs().format("DD/MM"),
    value,
    description,
    userId: user._id
  });

res.sendStatus(201);

} catch (error) {
  
}


}

export async function getPosts(req, res) {
  res.sendStatus(200);

  //     const { authorization } = req.headers;
  // const token = authorization?.replace('Bearer ', '');

  // const session = await db.collection("sessions").findOne({token})
  // if(!session){
  //   return res.sendStatus(401);
  // };

  // const posts = await db.collection("posts").find({ userId: new ObjectId(session.userId) })

  //     res.send(posts)

  try {
  } catch (error) {}
}
