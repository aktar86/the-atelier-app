"use server";

import { collection, dbConnect } from "../../../lib/dbConnect";
import bcrypt from "bcryptjs";

const usersCollection = await dbConnect(collection.USERS);

interface UserPayload {
  name: string;
  email: any;
  password: any;
  confirmPassword: any;
}

//register user
export const postUser = async (payload: UserPayload) => {
  //check payload
  const { name, email, password, confirmPassword } = payload;
  if (!email || !confirmPassword) {
    return null;
  }

  //check user
  const isUserExist = await usersCollection.findOne({ email: email });
  if (isUserExist) {
    return null;
  }
  //create user

  const newUser = {
    provider: "credentials",
    name,
    email,
    password: await bcrypt.hash(confirmPassword, 14),
    createdAt: new Date().toISOString(),
    role: "user",
  };
  //push user

  const result = await usersCollection.insertOne(newUser);
  if (result.acknowledged) {
    return {
      ...result,
      insertedId: result.insertedId.toString(),
    };
  }
};

interface LoginPayload {
  email: string;
  password: any;
}
//login user
export const loginUser = async (payload: LoginPayload) => {
  const { email, password } = payload;
  if (!email || !password) return null;

  const user = await usersCollection.findOne({ email });
  if (!user) return null;

  const isMatched = await bcrypt.compare(password, user.password);

  if (isMatched) {
    return user;
  } else {
    return null;
  }
};



// if (isMatched) {
//       // ৪. পাসওয়ার্ড ফিল্ডটি বাদ দিয়ে বাকি ডাটা পাঠানো (Security Best Practice)
//       const { password: userHash, ...userWithoutPassword } = user;

//       return {
//         ...userWithoutPassword,
//         id: user._id.toString(), // MongoDB ID-কে স্ট্রিং করে দেওয়া ভালো
//       };
//     }
