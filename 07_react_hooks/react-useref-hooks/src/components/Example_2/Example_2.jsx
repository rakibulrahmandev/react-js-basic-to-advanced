import { useRef } from "react"

export default function Example_2() {

    const inputValue = useRef()

    const handleGetValue = () => {
        console.log(inputValue.current.value);
    }

    return (
        <>
            <div className="w-[450px] min-h-[200px] p-5 bg-gray-900 rounded-md flex items-center justify-center gap-5">
                <input type="text" ref={inputValue} className="border border-gray-800 outline-none rounded-md py-3 px-2 text-white" />
                <button onClick={handleGetValue} className="bg-white px-3 py-[11px] border border-white rounded-md cursor-pointer">Get Value</button>
            </div>
        </>
    )
}