import React, {useState} from 'react';
import { supabase } from '../../utils/SupabaseCreateClient';
import {Link, useNavigate} from "react-router-dom";
import toast, {Toaster} from "react-hot-toast";
import Svg from "../Svg/Svg";


const Login: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordShown, setPasswordShown] = useState<boolean>(false);

    let navigate = useNavigate();

    const supabaseLogin = async () => {
        const connectToast = toast.loading('Connexion en cours...');
        const { user, error } = await supabase.auth.signIn({
            email: email,
            password: password
        });
        if (error) {
            toast.error(error.message, {
                id: connectToast,
            });
        }
        if (user) {
            toast.success('Connexion réussie ! Redirection...', {
                id: connectToast,
            });
            setTimeout(() => {
                navigate('/feed');
            }, 1500);
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
            supabaseLogin()
                .then(user => {
                    setTimeout(() => {
                        // navigate
                    }, 2000);
                }
            )
    }
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    }

    return (
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <Toaster />
            <div className="max-w-lg mx-auto">
                <h1 className="text-2xl font-bold text-center text-indigo-600 sm:text-3xl">Not Twitter</h1>

                <form onSubmit={handleSubmit} className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl">
                    <p className="text-lg font-medium">Connectez-vous à votre compte</p>
                    <div>
                        <label className="text-sm font-medium">Email</label>

                        <div className="relative mt-1">
                            <input
                                type="email"
                                id="email"
                                className="input"
                                placeholder="jean@valjean.fr"
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <span className="input-icon">
                                <Svg svg={"email"} />
                            </span>
                        </div>
                    </div>

                    <div>
                        <label className="text-sm font-medium">Mot de passe</label>

                        <div className="relative mt-1">
                            <input
                                type={passwordShown ? "text" : "password"}
                                id="password"
                                className="input"
                                placeholder="********"
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <span className="input-icon" onClick={togglePassword}>
                                <Svg svg={passwordShown ? "opened-eye" : "closed-eye"} />
                            </span>
                        </div>
                    </div>

                    <button type="submit" className="block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg">
                        Connexion
                    </button>

                    <p className="text-sm text-center text-gray-500">
                        Pas de compte ?
                        <Link to={'/register'} className="text-indigo-600 hover:text-indigo-500"> S'inscrire</Link>
                    </p>
                </form>
            </div>
        </div>

    );
}

export default Login;