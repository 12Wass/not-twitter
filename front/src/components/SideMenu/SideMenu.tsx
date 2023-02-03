import React, {useState} from 'react';
import SideButton from "../Navigation/SideButton";
import Svg from "../Svg/Svg";
import {Disconnect} from "../../utils/Disconnect";

const SideMenu: React.FC = () => {
    // Ce composant permettra d'appeler tous les autres composants créant le feed principal.
    return (
        <>
            <div
                id="Main"
                 className="xl:rounded-r transform  xl:translate-x-0 ease-in-out transition duration-500 flex
                 justify-start items-start h-full w-full sm:w-64 flex-col">
                <div className="xl:flex justify-start p-6 items-center space-x-3">
                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sidebar2-svg1.svg" alt="logo"/>
                    <p className="text-2xl leading-6 text-white">Not Twitter</p>
                </div>
                <div className="flex flex-col justify-start items-center px-6 w-full">
                    <div id="menu1" className="flex justify-start  flex-col w-full md:w-auto items-start pb-1 ">
                        <SideButton name={"Messages"} svg={"message"} to={"/login"} />
                        <SideButton name={"Security"} svg={"security"} to={"/login"}/>
                        <SideButton name={"Settings"} svg={"settings"} to={"/login"}/>
                        <SideButton name={"Notifications"} svg={"notifications"} to={"/login"}/>
                        <SideButton name={"Disconnect"} svg={"bookmark"} to={""} onClick={() => { Disconnect() }}/>
                    </div>
                </div>
                <div className="flex flex-col justify-end items-center h-full pb-6 px-6 w-full space-y-32">
                    { /* User part */ }
                    <div className=" flex justify-between items-center w-full mt-2">
                        <div className="flex justify-center items-center space-x-2">
                            <div>
                                <img className="rounded-full" src="https://i.ibb.co/L1LQtBm/Ellipse-1.png" alt="avatar"/>
                            </div>
                            <div className="flex justify-start flex-col items-start">
                                <p className="cursor-pointer text-sm leading-5 text-white">Wassim Dahmane</p>
                                <p className="cursor-pointer text-xs leading-3 text-gray-300">wassimdah@gmail.com</p>
                            </div>
                        </div>
                        <Svg svg={"settings-bolt"} />
                    </div>
            </div>
            </div>
        </>
);
}

export default SideMenu;