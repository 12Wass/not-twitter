import React, {useState} from 'react';
import Svg from "../Svg/Svg";
import {Link} from "react-router-dom";
interface Props {
     name: string;
     svg: string;
     to: string;
     onClick?: () => void;
}

const SideButton: React.FC<Props> = ({name, svg, to, onClick}) => {
    // Ce composant permettra d'appeler tous les autres composants créant le feed principal.
    return (
        <Link
            to={to}
            className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52"
            onClick={onClick}>
            <Svg svg={svg} />
            <p className="text-base leading-4">{name}</p>
        </Link>
    );
}

export default SideButton;