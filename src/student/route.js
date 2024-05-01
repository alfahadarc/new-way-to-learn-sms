import express from 'express'
const studentRouter = express.Router();
 import {  getAllStudent, addStudent } from './controller.js';
import validate from "../config/validation.js"
import {body} from 'express-validator'

studentRouter.get("/", getAllStudent)



studentRouter.post("/", validate([
    body('name').notEmpty(),
    body('father_name').notEmpty(),
    body('mother_name').notEmpty(),
    body('dob').notEmpty(),
    body('mobile').isNumeric().notEmpty(),
    body('address').notEmpty(),
]), addStudent)


export default studentRouter;