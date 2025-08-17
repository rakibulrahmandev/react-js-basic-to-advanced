import { useEffect, useState } from "react"

export default function Example_3() {

    const [count, setCount] = useState(0)
    
    useEffect(() => {
        setTimeout(() => {
            setCount(count => count + 1)
        }, 1000)
    }, [count])

    return (
        <>
            <div className="max-w-[450px] min-h-[200px] bg-gray-900 p-5 rounded-md flex items-center justify-center flex-col flex-1 gap-5">
                <h1 className="font-semibold text-white text-2xl">I've rendered {count} seconds!</h1>
            </div>
        </>
    )
}