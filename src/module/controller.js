
import { getAll, getByCategory, getByGrade, addModule } from "./repository.js";


export async function getAllModule(req, res, next) {
    try {
        const module = await getAll();
        res.status(200).json(module);
    } catch(err) {
        next(err)
    }
}

export async function getModuleByCategory(req, res, next) {
    const category = req.params['category']
    try {
        const module = await getByCategory(category);
        res.status(200).json(module);
    } catch(err) {
        next(err)
    }
}

export async function getModuleByGrade(req, res, next) {
    const grade = req.params['grade']
    try {
        const module = await getByGrade(grade);
        res.status(200).json(module);
    } catch(err) {
        next(err)
    }
}



export async function saveModule(req, res, next) {

    //category, grade, name, description
    const category = req.body.category
    const grade = req.body.grade
    const name = req.body.name
    const description = req.body.description


    const module = {
        category: category,
        grade: grade,
        name: name,
        description: description
    }

    try {
        const rowCount = await addModule(module);
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