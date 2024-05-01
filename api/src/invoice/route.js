import express from 'express'
const invoiceRouter = express.Router();
 import {  addInvoice, getAllInvoice } from './controller.js';
import validate from "../config/validation.js"
import {body} from 'express-validator'

invoiceRouter.get("/", getAllInvoice)



invoiceRouter.post("/:studentId", validate([
    body('month').notEmpty(),
    body('amount').isNumeric().notEmpty(),
]), addInvoice)


export default invoiceRouter;