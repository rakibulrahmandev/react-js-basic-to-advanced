import { useState } from "react"

export default function Example_1() {

    const [color, setColor] = useState('Red')

    const handleColors = () => {
        setColor('Blue')
    }

    return (
        <>
            <div className="w-[400px] min-h-[200px] bg-gray-950 flex items-center justify-center flex-col gap-10 rounded-md p-5">
                <h2 className="font-semibold text-3xl text-gray-700">My favourite color is {color}!</h2>
                <button onClick={handleColors} className="w-[120px] py-3 border border-gray-700 font-medium text-lg text-gray-700 rounded-md cursor-pointer transition-colors duration-100 ease-in hover:bg-gray-700/20">Blue</button>
            </div>
        </>
    )
}