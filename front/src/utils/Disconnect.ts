import {useNavigate} from "react-router-dom";
import {supabase} from "./SupabaseCreateClient";
import toast from "react-hot-toast";

export const Disconnect = async () => {
    const navigate = useNavigate();
    const { error } = await supabase.auth.signOut();
    if (error) {
        toast.error(error.message);
    } else {
        navigate('/login');
    }
}