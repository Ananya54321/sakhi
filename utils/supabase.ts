import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl: String =
  process.env.EXPO_PUBLIC_SUPABASE_URL || "Use your key here";
const supabaseAnonKey: String =
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || "Use your key here";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
