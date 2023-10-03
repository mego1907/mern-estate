import User from "../models/user.model.js";
import bcryptjs from "bcryptjs"

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  try{

    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    await newUser.save();
    res.state(201).json("User created successfully");

  } catch(err) {
    res.status(500).json(error)
  }

}

