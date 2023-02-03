import React, {ReactNode} from 'react';
import SideMenu from '../SideMenu/SideMenu';

type Props = { children: ReactNode }
const Main: React.FC<Props> = ({children}) => {
    return (
        <div className="bg-gray-900">
            <div className="container mx-auto h-screen w-screen flex">
                <SideMenu />
                {children}
            </div>
        </div>
    );
}

export default Main;