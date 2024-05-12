import express from "express";
import authRouter from "./src/auth/route.js";
import studentRouter from "./src/student/route.js";
import invoiceRouter from "./src/invoice/route.js";



import { authorize } from "./src/config/authorize.js";

const router = express.Router();

router.use("/auth", authRouter);
// router.use("/teacher", authorize(), teacherRouter);


router.use("/student",authorize(), studentRouter);
router.use("/invoice",authorize(), invoiceRouter)


export default router;