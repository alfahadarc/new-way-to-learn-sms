import express from "express";
const router = express.Router();

import { authenticate, register } from "./controller.js";

router.post("/login", authenticate);

router.post("/register", register)


export default router;