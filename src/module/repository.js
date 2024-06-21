import { supabase } from "../config/database.js"


export async function getAll() {
    try {
        const { data, error } = await supabase
            .from('module')
            .select('*');

        if (error) {
            throw error;
        }

        return data;
    } catch (error) {
        console.error('Error fetching module:', error.message);
        return null;
    }
}

export async function getById(id) {
    try {
        const { data, error } = await supabase
            .from('module')
            .select('*')
            .eq('id', id);

        if (error) {
            throw error;
        }

        return data;
    } catch (error) {
        console.error('Error fetching module:', error.message);
        return null;
    }
}

export async function addModule(module) {
    try {
      
      const { error } = await supabase
        .from('module')
        .insert([module]);
  
      if (error) {
        throw error;
      }
     
    } catch (error) {
      console.error('Error saving module:', error.message);
      throw error;
    }
  }

  export async function getByGrade(grade) {
    try {
        const { data, error } = await supabase
            .from('module')
            .select('*')
            .eq('grade', grade);

        if (error) {
            throw error;
        }

        return data;
    } catch (error) {
        console.error('Error fetching module:', error.message);
        return null;
    }
}
// k2.NS.1/2
export async function getByCategory(category) {
  try {
      const { data, error } = await supabase
          .from('module')
          .select('*')
          .eq('category', category);

      if (error) {
          throw error;
      }

      return data;
  } catch (error) {
      console.error('Error fetching module:', error.message);
      return null;
  }
}
