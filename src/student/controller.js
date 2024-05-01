
import { getAll, saveStudent, getById } from "./repository.js";


export async function getAllStudent(req, res, next) {
    try {
        const student = await getAll();
        console.log(student)
        res.status(200).json(student);
    } catch(err) {
        next(err)
    }
}

export async function getStudentById(req, res, next) {
    const id = req.params['id']
    try {
        const student = await getById(id);
        res.status(200).json(student);
    } catch(err) {
        next(err)
    }
}



export async function addStudent(req, res, next) {

    //initial, name,surname,email,seniority_rank,active,theory_courses, sessional_courses
    const name = req.body.name
    const father_name = req.body.father_name
    const mother_name = req.body.mother_name
    const dob = req.body.dob
    const mobile = req.body.mobile
    const address = req.body.address


    const student = {
        name: name,
        father_name: father_name,
        mother_name: mother_name,
        dob: dob,
        mobile: mobile,
        address: address
    }

    try {
        const rowCount = await saveStudent(student);
        res.status(200).json({message: "success"});

    } catch(err) {
        next(err)
    }

}


// export async function editTeacher(req, res, next) {
//     const initial = req.params['initial']
    
//     const name = req.body.name
//     const surname = req.body.surname
//     const email = req.body.email
//     const seniority_rank = req.body.seniority_rank
//     const active = req.body.active
//     const theory_courses = req.body.theory_courses
//     const sessional_courses = req.body.sessional_courses
    
//     const teacher = {
//         initial: initial,
//         name: name,
//         surname: surname,
//         email: email,
//         seniority_rank: seniority_rank,
//         active: active,
//         theory_courses: theory_courses,
//         sessional_courses: sessional_courses
//     }
    
    
//     try{
//         const rowCount = await updateTeacher(teacher)
//         res.status(200).json({ teacher:teacher })

//     }catch(err) {
//         next(err)
//     }

// }

// export async function deleteTeacher(req, res, next) {
//     const initial = req.params['initial']
//     try{
//         const rowCount = await removeTeacher(initial)
//         res.status(200).json({ row:rowCount })

//     }catch(err) {
//         next(err)
//     }
// }