import { supabase } from "../config/database.js"




export async function getAll() {
  try {
    const { data, error } = await supabase
      .from('student')
      .select('*');

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error fetching students:', error.message);
    return null;
  }
}

export async function saveStudent(student) {
  try {
    // Insert the student record into the 'students' table
    const { error } = await supabase
      .from('student')
      .insert([student]);

    if (error) {
      throw error;
    }

  } catch (error) {
    console.error('Error saving student:', error.message);
    throw error;
  }
}

export async function getById(id) {
  try {
    const { data, error } = await supabase
      .from('student')
      .select('*')
      .eq('id', id);

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error fetching students:', error.message);
    return null;
  }
}

export async function addOnGoing(id, module_id) {
  try {
    const { error } = await supabase
      .from('student')
      .update({ ongoing: module_id })
      .eq('id', id);

    if (error) {
      throw error;
    }
  } catch (error) {
    console.error('Error adding on going module:', error.message);
    throw error;
  }
}

export async function getOnGoing(id) {
  try {
    const { data, error } = await supabase
      .from('student')
      .select('ongoing')
      .eq('id', id);

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error fetching on going modules:', error.message);
    return null;
  }
}

export async function getCompleted(id) {
  try {
    const { data, error } = await supabase
      .from('student')
      .select('complete')
      .eq('id', id);

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error fetching completed modules:', error.message);
    return null;
  }
}

export async function addToComplete(id, array) {
  try {
    const { error } = await supabase
      .from('student')
      .update({ complete: array })
      .eq('id', id);

    if (error) {
      throw error;
    }
  } catch (error) {
    console.error('Error adding on complete module:', error.message);
    throw error;
  }
}

export async function deleteOnGoing(id) {
  try {
    const { error } = await supabase
      .from('student')
      .update({ ongoing: null })
      .eq('id', id);

    if (error) {
      throw error;
    }
  } catch (error) {
    console.error('Error deleting on going module:', error.message);
    throw error;
  }
}

// export async function getAllModuleInfo(id) {

//   const onGoing = await getOnGoing(id);
//   const completed = await getCompleted(id);

  

//   let onGoingModule = null

//   if (onGoing !== null) {
//     const onGoingId = onGoing[0].ongoing
//     onGoingModule = await getModuleByID(onGoingId)
//   }

  
//   let completedModule = []

//   if (completed !== null) {
//     const completedIdArray = completed[0].complete
//     completedIdArray.forEach(element => {
//       completedModule.push(getModuleByID(element))
//     })
//   }


//   return {
//     onGoingModule: onGoingModule,
//     completedModule: completedModule
//   }

// }