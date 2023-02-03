import Svg from "../Svg/Svg";
import React from "react";

const Tweet: React.FC = () => {

    return (
        <>
            <div className="flex flex-shrink-0 p-4 pb-0">
                <a href="#" className="flex-shrink-0 group block">
                    <div className="flex items-center">
                        <div>
                            <img className="inline-block h-10 w-10 rounded-full"
                                 src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png"
                                 alt=""/>
                        </div>
                        <div className="ml-3">
                            <p className="text-base leading-6 font-medium text-white">
                                Silvers
                                <span
                                    className="tweet-username-date">
                                        @ouaiswass - 26 Octobre
                                      </span>
                            </p>
                        </div>
                    </div>
                </a>
            </div>
            <div className="pl-16">
                <p className="text-base width-auto font-medium text-white flex-shrink">
                    Ça, c'est un hashtag <span className="hashtag">#hashtag</span>
                    Je me demande ce que je vais faire ensuite <span className="hashtag">#pasdidée</span>
                </p>


                <div className="flex">
                    {/* Icons SVG */}
                    <div className="w-full">
                        <div className="flex items-center">
                            <div className="flex-1 text-center">
                                <a href="#"
                                   className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                                    <Svg svg={"comment"}/>
                                </a>
                            </div>
                            <div className="flex-1 text-center py-2 m-2">
                                <a href="#"
                                   className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                                    <Svg svg={"retweet"}/>
                                </a>
                            </div>
                            <div className="flex-1 text-center py-2 m-2">
                                <a href="#"
                                   className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                                    <Svg svg={"like"}/>
                                </a>
                            </div>
                            <div className="flex-1 text-center py-2 m-2">
                                <a href="#"
                                   className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                                    <Svg svg={"share"}/>
                                </a>
                            </div>
                            <div className="flex-1 text-center py-2 m-2">
                                <a href="#"
                                   className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                                    <Svg svg={"bookmark"}/>
                                </a>
                            </div>
                            <div className="flex-1 text-center py-2 m-2">
                                <a href="#"
                                   className="w-12 mt-1 group flex items-center text-gray-500 px-3 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300">
                                    <Svg svg={"analytics"}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border-gray-600"/>
        </>
    );
}

export default Tweet;