import React, {useEffect, useState} from 'react';
import SideMenu from "../SideMenu/SideMenu";
import TweetList from "../TweetList/TweetList";
import {supabase} from "../../utils/SupabaseCreateClient";
import {useNavigate} from "react-router-dom";

/**
 * Ce composant permet d'appeler tous les autres composants créant le feed principal.
 * Ce qu'il vas falloir faire ici, sachant que c'est LE composant principal de notre site, c'est de :
 * - vérifier que l'utilisateur est connecté / rediriger l'utilisateur non connecté vers la page de connexion
 * - récupérer les tweets de l'utilisateur en cours
 * - afficher ces tweets en les passant tous au composant TweetList
 * - récupérer les messages et les notifications de l'utilisateur en cours
 * - les afficher en guise petit chiffre au-dessus des icônes déjà existantes, donc faire passer le state au composant SideMenu
 * @returns {JSX.Element}
 * @constructor
 */


const Feed: React.FC = () => {
    // Vérifier que la session existe via supabase.auth.session();
    const getSession = supabase.auth.session();
    const [session, setSession] = useState<Object>(); // Essayer de passer la session en tant que props à l'avenir
    const navigate = useNavigate();

    useEffect(() => {
        if (getSession) {
            setSession(getSession);
        } else {
            navigate('/login');
        }
    }, [getSession]);


   return (
       <div className="bg-gray-900">
           <div className="container mx-auto h-screen w-screen flex">
               <SideMenu />
               <TweetList />
           </div>
       </div>
    );
}

export default Feed;