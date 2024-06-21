import express from 'express'
const studentRouter = express.Router();
 import {  getAllStudent, addStudent, addOnGoingModule, addToCompleteList,getModuleInfo } from './controller.js';
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
    body('grade').notEmpty(),
]), addStudent)

studentRouter.get("/addOngoing/:id/:module_id", addOnGoingModule)
studentRouter.get("/addToCompleteList/:id", addToCompleteList)
studentRouter.get("/moduleInfo/:id", getModuleInfo)



export default studentRouter;