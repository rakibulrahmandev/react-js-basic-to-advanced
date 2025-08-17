import { useEffect, useRef, useState } from "react"

export default function Example_1() {

    const [count, setCount] = useState(0)
    const value = useRef(0)

    useEffect(() => {
        value.current += 1
    })

    return (
        <> 
            <div className="w-[450px] min-h-[200px] p-5 bg-gray-900 rounded-md flex items-center justify-center gap-10 flex-col">
                <div className="flex items-center justify-center gap-5">
                    <button onClick={() => setCount(count => count - 1)} className="py-3 px-5 rounded-md bg-gray-800 font-medium text-white cursor-pointer">Decrease -</button>
                    <h1 className="font-semibold text-5xl text-white">{count}</h1>
                    <button onClick={() => setCount(count => count + 1)} className="py-3 px-5 rounded-md bg-gray-800 font-medium text-white cursor-pointer">Increase +</button>
                </div>
                <h1 className="text-2xl font-medium text-white">Render Count: {value.current}</h1>
            </div>
        </>
    )
}