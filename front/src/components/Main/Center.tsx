import React, {ReactNode} from "react"

type Props = { children: ReactNode}
const Center: React.FC<Props> = ({children}) => {
    return (
        <div className="border-solid border-2 border-gray-800 w-1/2">
            <hr className="border-gray-600" />
                <div className="flex">
                    {children}
                </div>
        </div>
    )
}

export default Center; 