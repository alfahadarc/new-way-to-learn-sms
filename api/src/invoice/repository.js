import { supabase } from "../config/database.js"


export async function getAll() {
    try {
        const { data, error } = await supabase
            .from('invoice')
            .select('*');

        if (error) {
            throw error;
        }

        return data;
    } catch (error) {
        console.error('Error fetching invoice:', error.message);
        return null;
    }
}

export async function saveInvoice(invoice) {
    try {
      const { error } = await supabase
        .from('invoice')
        .insert([invoice]);
  
      if (error) {
        throw error;
      }
     
    } catch (error) {
      console.error('Error saving invoice:', error.message);
      throw error;
    }
  }
