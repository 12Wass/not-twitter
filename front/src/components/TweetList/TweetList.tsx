import React, {useEffect, useState} from 'react';
import { supabase } from '../../utils/SupabaseCreateClient';
import Svg from "../Svg/Svg";
import Tweet from "../Tweet/Tweet";


const TweetList: React.FC = () => {
    // Ce composant permettra d'appeler tous les autres composants créant le feed principal.
    const [newTweet, setNewTweet] = useState<String>("");
    const sendTweet = async () => {
        console.log(newTweet, supabase.auth.session());
        try {
            const { data, error } = await supabase
            .from('tweet')
            .insert({
                user: supabase.auth.session()?.user?.id,
                content: newTweet
            })
        } catch (error) {
            console.log(error);
            alert('Une erreur est survenue, vérifiez la console');
        }
    }
    return (
        <>
        <div className="border-solid border-2 border-gray-800 w-1/2">
            <hr className="border-gray-600" />
                <div className="flex">
                    <div className="m-2 w-10 py-1">
                        <img className="inline-block h-10 w-10 rounded-full"
                             src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png" alt=""/>
                    </div>
                    <div className="flex-1 px-2 pt-2 mt-2">
                        <textarea className="tweet-textarea placeholder:pt-3" rows={2}
                                  cols={50} placeholder="What's happening?" onChange={(e) => setNewTweet(e.target.value)}/>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-64 px-2">
                        <div className="flex items-center">
                            <div className="flex-1 text-center px-1 py-1 m-2">
                                <a href="#"
                                   className="new-tweet-icon">
                                    <Svg svg={"photo"} />
                                </a>
                            </div>

                            <div className="flex-1 text-center py-2 m-2">
                                <a href="#"
                                   className="new-tweet-icon">
                                    <Svg svg={"audio"} />
                                </a>
                            </div>

                            <div className="flex-1 text-center py-2 m-2">
                                <a href="#"
                                   className="new-tweet-icon">
                                    <Svg svg={"survey"} />
                                </a>
                            </div>

                            <div className="flex-1 text-center py-2 m-2">
                                <a href="#"
                                   className="new-tweet-icon">
                                    <Svg svg={"emoji"} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1">
                        <button
                            onClick={sendTweet}
                            className="bg-blue-400 mt-5 hover:bg-blue-600 text-white font-bold py-2 px-8 rounded-full mr-8 float-right">
                            Tweet
                        </button>
                    </div>
                </div>
                <hr className="border-gray-600 border-1" />
            <Tweet />
        </div>
        </>
    );
}

export default TweetList;