
import { getAll, saveStudent, getById, addOnGoing, getCompleted, addToComplete , getOnGoing, deleteOnGoing} from "./repository.js";

import { getById as getModuleByID } from '../module/repository.js'

export async function getAllStudent(req, res, next) {
    try {
        const student = await getAll();
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
    const name = req.body.name
    const father_name = req.body.father_name
    const mother_name = req.body.mother_name
    const dob = req.body.dob
    const mobile = req.body.mobile
    const address = req.body.address
    const grade = req.body.grade


    const student = {
        name: name,
        father_name: father_name,
        mother_name: mother_name,
        dob: dob,
        mobile: mobile,
        address: address,
        grade: grade
    }

    try {
        const rowCount = await saveStudent(student);
        res.status(200).json({message: "success"});

    } catch(err) {
        next(err)
    }

}

export async function addOnGoingModule(req, res, next) {
    const module_id = req.params['module_id']
    const id = req.params['id']

    try {
        const rowCount = await addOnGoing(id, module_id);
        res.status(200).json({message: "success"});

    } catch(err) {
        next(err)
    }
}

export async function addToCompleteList(req, res, next) {

    const id = req.params['id']
    try {
        const completed = await getCompleted(id);
        const onGoing = await getOnGoing(id);


        if (onGoing === null || onGoing[0].ongoing === null) {
            res.status(501).json({message: "on going is null"});
        }
        else if (completed === null || completed[0].complete === null ) {
            console.log("completed is null")
            const rowCount = await addToComplete(id, [onGoing[0].ongoing]);
            const rowCount2 = await deleteOnGoing(id);
            res.status(200).json({message: "success"});
        }
        else if (completed[0].complete.includes(onGoing[0].ongoing)) {
            console.log("Already in the completed list")
            res.status(501).json({message: "Already in the completed list"});
        }
        else{
            console.log("Adding to the completed list")
            const completedArray = completed[0].complete
            completedArray.push(onGoing[0].ongoing)
            const rowCount = await addToComplete(id, completedArray);
            const rowCount2 = await deleteOnGoing(id);
            res.status(200).json({message: "success"});
        }

    } catch(err) {
        next(err)
    }

   
}

export async function getModuleInfo(req, res, next) {
    const id = req.params['id']
    try {
        
        const onGoing = await getOnGoing(id);
        const completed = await getCompleted(id);

        console.log("on going: ",onGoing)
        console.log("complete: ",completed)


        let onGoingModule = null

        if (onGoing !== null && onGoing[0].ongoing !== null) {
            const onGoingId = onGoing[0].ongoing
            onGoingModule = await getModuleByID(onGoingId)
        }

        
        let completedModule = []


        if (completed !== null && completed[0].complete !== null) {
            const completedIdArray = completed[0].complete  
            const completedModulePromises = completedIdArray.map(element => getModuleByID(element));
            
            completedModule = await Promise.all(completedModulePromises)
            .then(arrayOfArrays => [].concat(...arrayOfArrays));
        }

        res.status(200).json({ onGoingModule, completedModule });
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