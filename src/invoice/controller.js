
import { getAll, saveInvoice } from "./repository.js";
import { getById } from "../student/repository.js";


export async function getAllInvoice(req, res, next) {
    try {
        const invoice = await getAll();
        res.status(200).json(invoice);
    } catch(err) {
        next(err)
    }
}



export async function addInvoice(req, res, next) {
    const student_id = req.params.studentId;

    const student = await getById(student_id);

    if (!student) {
        res.status(404).json({message: "student not found"});
    }

    const { month, amount } = req.body;

    const invoice = {
        month,
        amount,
        student_id
    }

    try {
        const rowCount = await saveInvoice(invoice);
        res.status(200).json({message: "success"});

    } catch(err) {
        next(err)
    }

}