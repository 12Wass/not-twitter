import React, {useState} from 'react';
import {supabase} from '../../utils/SupabaseCreateClient';
import {Link, useNavigate} from "react-router-dom";
import toast, {Toaster} from "react-hot-toast";
import Svg from "../Svg/Svg";


const Register: React.FC = () => {
    // TODO : Form validation before sending.
    const [email, setEmail] = useState<string>("");
    const [tweetname, setTweetName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
    const [passwordShown, setPasswordShown] = useState<boolean>(false);
    const [phone, setPhone] = useState<string>("");

    let navigate = useNavigate();


    const supabaseRegister = async () => {
        if (password === passwordConfirmation) {
            const registerToast = toast.loading('Inscription en cours...');
            const {user, error} = await supabase.auth.signUp(
                {
                    email: email,
                    password: password
                });
            if (error) {
                toast.error('Une erreur est survenue lors de l\'inscription', {
                    id: registerToast,
                });
            }
            if (user?.identities?.length === 0) {
                toast.error('L\'adresse mail renseignée est déjà utilisée.', {
                    id: registerToast,
                });
            }
            else if (user) {
                await supabase
                    .from('tweetname')
                    .insert({
                        user: user.id,
                        tweetname: tweetname
                    });
                await supabase
                    .from('profile')
                    .insert({
                        user: user.id,
                    });
                toast.success('Inscription réussie ! Cliquez sur le lien contenu dans l\'email pour activer votre compte.', {
                    id: registerToast,
                });
                setTimeout(() => {
                    navigate('/login');
                }, 4000);
            }
        }
    }

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await supabaseRegister();
    }

    const handleChange = (event: EventTarget & HTMLInputElement) => {
        // TODO : Form validation on every changes on input
    }

    return (
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
            <Toaster/>
            <div className="max-w-lg mx-auto">
                <h1 className="text-2xl font-bold text-center text-indigo-600 sm:text-3xl">Not Twitter</h1>

                <p className="max-w-md mx-auto mt-4 text-center text-gray-500">
                    Vous voulez rejoindre le plus grand réseau social de tous les temps ? Remplissez ce formulaire.
                </p>

                <form onSubmit={handleSubmit} className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl">
                    <p className="text-lg font-medium">Inscrivez-vous pour accéder à Not Twitter</p>
                    { /* Email field */}
                    <div>
                        <label className="text-sm font-medium">Adresse email</label>

                        <div className="relative mt-1">
                            <input
                                type="email"
                                id="email"
                                className="input"
                                placeholder="jean@valjean.fr"
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <span className="input-icon">
                                <Svg svg={"email"}/>
                            </span>
                        </div>
                    </div>

                    { /* Tweetname field */}
                    <div>
                        <label className="text-sm font-medium">Nom d'utilisateur</label>

                        <div className="relative mt-1">
                            <input
                                type="text"
                                id="tweetname"
                                className="input"
                                placeholder="Tweet Name"
                                onChange={(e) => setTweetName(e.target.value)}
                            />

                            <span className="input-icon">
                                <Svg svg={"email"}/>
                            </span>
                        </div>
                    </div>

                    { /* Phone field */}
                    <div>
                        <label className="text-sm font-medium">Numéro de téléphone</label>

                        <div className="relative mt-1">
                            <input
                                type="tel"
                                id="phone"
                                className="input"
                                placeholder="0612345678"
                                onChange={(e) => setPhone(e.target.value)}
                            />

                            <span className="input-icon">
                                <Svg svg={"phone"} />
                            </span>
                        </div>
                    </div>

                    { /* Password - Password confirmation fields */}
                    <div>
                        <label className="text-sm font-medium">Mot de passe</label>
                        <div className="relative mt-1">
                            <input
                                type={passwordShown ? "text" : "password"}
                                id="password"
                                className="input"
                                placeholder="*********"
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <span className="input-icon" onClick={togglePassword}>
                                <Svg svg={passwordShown ? "opened-eye" : "closed-eye"}/>
                              </span>
                        </div>
                    </div>

                    <div>
                        <label className="text-sm font-medium">Confirmation</label>
                        <div className="relative mt-1">
                            <input
                                type="password"
                                id="passwordConfirmation"
                                className="input"
                                placeholder="*********"
                                onChange={(e) => setPasswordConfirmation(e.target.value)}
                            />

                            <span className="input-icon">
                                <Svg svg={"red-closed-eye"}/>
                            </span>
                        </div>
                    </div>

                    <button type="submit"
                            className="block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg">
                        Inscription
                    </button>
                    <p className="text-sm text-center text-gray-500">
                        Déjà un compte ?
                        <Link to={'/login'} className="text-indigo-600 hover:text-indigo-500"> Se connecter</Link>
                    </p>
                </form>
            </div>
        </div>

    );
}

export default Register;