import { useState } from "react"

export default function Example_6() {

    const [count, setCount] = useState(0)

    const increase = () => {
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)
    }

    return (
        <>
            <div className="w-[400px] min-h-[200px] bg-gray-950 flex items-center justify-center flex-col gap-10 rounded-md p-5">
                <h2 className="font-semibold text-3xl text-gray-700">Count: {count}</h2>
                <button onClick={increase} className="w-[140px] py-3 border border-gray-700 font-medium text-lg text-gray-700 rounded-md cursor-pointer transition-colors duration-100 ease-in hover:bg-gray-700/20">Increase by 5</button>
            </div>
        </>
    )
}