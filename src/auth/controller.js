import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import {
    findAdminDB as findAdminUsingUsername,
    registerAdminDB
} from "./repository.js";


const secret = process.env.SECRET || "default-secret";
const saltRounds = 10;

export async function authenticate(req, res, next) {
    try {
        const admin = await findAdminUsingUsername(req.body.username);
        const result = await bcrypt.compare(req.body.password, admin.password);

        if (result) {
            const token = jwt.sign({ username: admin.username }, secret, {
                expiresIn: "2 days",
            });

            const { password, ...user } = admin;

            res.status(200).json({ message: "Logged in!", user, token });
        } else {
            next(new HttpError(401, "Invalid username or password!"));
        }
    } catch (error) {
        next(error);
    }
}


export async function register(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;

    if (email === process.env.EMAIL) {
        try {
            const hash = await bcrypt.hash(password, saltRounds);
            await registerAdminDB(username, hash);
            res.status(201).json({
                message: "registration successfull!",
            });
        } catch (error) {
            next(error);
        }
    }else{
        res.status(401).json({message: "You are not allowed to register"})
    }
}
