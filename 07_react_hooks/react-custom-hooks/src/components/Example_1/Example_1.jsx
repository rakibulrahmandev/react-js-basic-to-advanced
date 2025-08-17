import useLocalStorage from "../../hooks/useLocalStorage"

export default function Example_1() {

    const [key, setValue] = useLocalStorage('username', '')

    return (
        <>
            <div className="w-[450px] min-h-[250px] bg-gray-900 rounded-lg p-5 flex items-center justify-center gap-10 flex-col">
                <input onChange={(e) => setValue(e.target.value)} value={key} name="username" type="text" placeholder="Enter your name" autoComplete="off" className="w-full border border-gray-800 p-3 text-white text-xl rounded-md outline-none placeholder:text-gray-800" />
                <h1 className="text-white font-semibold text-3xl">Hello, {key}!</h1>
            </div>
        </>
    )
}