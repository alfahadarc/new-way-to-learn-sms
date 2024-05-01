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
