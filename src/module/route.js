import express from 'express'
const moduleRouter = express.Router();
 import { getAllModule, getModuleByCategory, getModuleByGrade, saveModule } from './controller.js';
import validate from "../config/validation.js"
import {body} from 'express-validator'

moduleRouter.get("/", getAllModule)
moduleRouter.get("/category/:category", getModuleByCategory)
moduleRouter.get("/grade/:grade", getModuleByGrade)
moduleRouter.post("/", validate([
    body('category').notEmpty(),
    body('grade').notEmpty(),
    body('name').notEmpty(),
    body('description').notEmpty(),
]), saveModule)


export default moduleRouter;