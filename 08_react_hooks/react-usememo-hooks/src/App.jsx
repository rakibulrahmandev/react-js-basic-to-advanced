import { useMemo, useState } from "react"

export default function App() {


    const [number, setNumber] = useState(0)
    const [count, setCount] = useState(0)

    const squareNumber = (num) => {
        console.log(`Calculation done!`);
        return Math.pow(num, 2)
    }

    const result = useMemo(() => {
        return squareNumber(number)
    }, [number])


    return (
        <>
            <div className="w-full min-h-screen bg-gray-950 flex items-center justify-center gap-5">
                <div className="w-[450px] min-h-[250px] bg-gray-900 rounded-md p-5 flex flex-col items-center justify-center gap-10">
                    <input name="number" type="text" onChange={(e) => setNumber(e.target.value)} className="w-full py-4 pl-4 pr-5 rounded-md border border-gray-800 text-lg text-white outline-none appearance-none" />
                    <div className="w-full">
                        <h1 className="text-white text-3xl font-semibold">Square of number : {result}</h1>
                    </div>
                </div>
                <div className="w-[450px] min-h-[250px] bg-gray-900 rounded-md p-5 flex flex-col items-center justify-center gap-10">
                    <button onClick={() => setCount(count => count + 1)} className="w-[350px] py-5 bg-white text-2xl font-semibold rounded-md cursor-pointer border-none outline-none">Count is : {count}</button>
                </div>
            </div>
        </>
    )
}