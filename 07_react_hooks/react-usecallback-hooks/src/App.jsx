import { useCallback, useState } from "react";
import Header from "./components/Header/Header";

export default function App() {

    const [count, setCount] = useState(0)

    const newFunc = useCallback(() => {}, [])
 
    return (
        <>
            <div className="w-full min-h-screen bg-gray-950">
                <Header newFunc={newFunc} />
                <div className="w-full min-h-[calc(100vh-73px)] flex items-center justify-center">
                    <div className="w-[450px] min-h-[250px] bg-gray-900 rounded-md p-10 flex items-center justify-center">
                        <button onClick={() => setCount(count => count + 1)} className="w-[200px] py-5 bg-white rounded-md text-xl font-semibold text-black cursor-pointer border-none outline-none">Count is : {count}</button>
                    </div>
                </div>
            </div>
        </>
    )
}