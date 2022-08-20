import React from 'react';
import SideMenu from "../SideMenu/SideMenu";
import TweetList from "../TweetList/TweetList";
import {supabase} from "../../utils/SupabaseCreateClient";

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
    console.log(supabase.auth.session());
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