import express from "express";
// import authRouter from "./src/auth/route.js";
import studentRouter from "./src/student/route.js";
import invoiceRouter from "./src/invoice/route.js";



// import { authorize } from "./src/config/authorize.js";

const router = express.Router();

// router.use("/auth", authRouter);
// router.use("/teacher", authorize(), teacherRouter);


router.use("/student", studentRouter);
router.use("/invoice",invoiceRouter)


export default router;