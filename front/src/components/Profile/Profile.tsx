import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import SideMenu from '../SideMenu/SideMenu';
import Main from '../Main/Main';
import Center from '../Main/Center';
import { supabase } from '../../utils/SupabaseCreateClient';
/**
 * Ce composant a pour objectif de synthétiser toutes les informations d'un utilisateur (Profile)
 * Il doit recevoir en paramètre (GET) le nom d'utilisateur recherché.
 * @returns {JSX.Element}
 */


const Profile: React.FC = () => {
    let params = useParams();
    let [user, setUser] = useState<{ user: { user: string },tweets: any[] | null }>();
    let [loading, setLoading] = useState<boolean>(false);
    let [realtimeTweets, setRealtimeTweets] = useState();
    const getUser = () => {
        /**
         * Nouveau schéma de base de données : 
         * -> Récupérer l'user depuis le tweetname
         * -> Faire correler tweetname.user avec profile.user puis tweets.user
         * -> Afficher tous les tweets ainsi que les informations publiques du profil.
         */
        supabase
            .from("tweetname")
            .select()
            .ilike("tweetname", `%${params.tweetName}%`)
            .then(result => {
                if (result.data) {
                    let gatheredUser = result.data[0];
                    supabase
                        .from('tweet')
                        .select()
                        .eq('user', gatheredUser.user)
                        .order('created_at', {ascending: false})
                        .then(t => {
                            setUser({user: gatheredUser, tweets: t.data});
                            setLoading(true);
                        })
                }
            });
    }

    /** Récupération des informations utilisateur ici */

    useEffect(() => {
        getUser();
    }, [params.tweetName]);

    useEffect(() => {
        if (loading === true) {

            const queryString = 'tweet:user=eq.' + user?.user.user;
            supabase
                .from(queryString)
                .on('INSERT', payload => {
                    console.log('Nouveau tweet', payload);
                })
                .subscribe();
                console.log(supabase.getSubscriptions());
        }
    }, [loading]);

    /** Si échec : Affichage d'une page d'erreur précisant que le nom d'utilisateur n'existe pas. */
    return (
        <Main>
            <Center>
                <p className="text-base width-auto font-medium text-white flex-shrink">Bienvenue sur le profil de {params.tweetName} (paramètre dans le lien) </p>
            </Center>
        </Main>
    )
}

export default Profile;