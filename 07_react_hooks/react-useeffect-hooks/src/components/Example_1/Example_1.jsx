import { useEffect, useState } from "react"

export default function Example_1() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setCount(counter => counter + 1)
        }, 1000)
    })

    return (
        <>
            <div className="max-w-[450px] min-h-[200px] bg-gray-900 p-5 rounded-md flex items-center justify-center flex-1">
                <h1 className="font-semibold text-white text-2xl">I've rendered {count} times!</h1>
            </div>
        </>
    )
}