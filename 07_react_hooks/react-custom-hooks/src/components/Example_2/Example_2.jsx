import useLocalStorage from "../../hooks/useLocalStorage"

export default function Example_2() {

    const [key, setValue] = useLocalStorage('userid', '')

    return (
        <>
            <div className="w-[450px] min-h-[250px] bg-gray-900 rounded-lg p-5 flex items-center justify-center gap-10 flex-col">
                <input onChange={(e) => setValue(e.target.value)} value={key} name="userid" type="text" placeholder="Enter your user id" autoComplete="off" className="w-full border border-gray-800 p-3 text-white text-xl rounded-md outline-none placeholder:text-gray-800" />
                <h1 className="text-white font-semibold text-3xl">Your user Id is : {key} </h1>
            </div>
        </>
    )
}