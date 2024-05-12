import { supabase } from "../config/database.js"

export async function findAdminDB(username) {
    try {
        const { data, error } = await supabase
            .from('admin')
            .select('username, password')
            .eq('username', username)

        if (error) {
            throw error;
        }


        return data[0];
    } catch (error) {
        return null;
    }

}

export async function registerAdminDB(username, password) {
    try {
        const { error } = await supabase
            .from('admin')
            .insert([{ username, password }]);

        if (error) {
            throw error;
        }

    } catch (error) {
        throw error;
    }
}
