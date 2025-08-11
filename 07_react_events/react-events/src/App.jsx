import Button from "./components/button/Button";

export default function App() {

    const handleIndigo = () => {
        console.log(`I'm Indigo!`)
    }

    const handleOrange = (color) => {
        console.log(`I'm ${color}!`)
    }

    const handleBlue = () => {
        console.log(`I'm Blue!`)
    }

    return (
        <>
            <div className="w-full min-h-screen bg-gray-950 flex items-center justify-center gap-5 relative">
                <button onClick={() => console.log(`I'm Red!`)} className="bg-red-500 text-white font-semibold px-5 py-3 rounded-md cursor-pointer">Red</button>
                <button onClick={() => handleOrange('Orange')} className="bg-orange-500 text-white font-semibold px-5 py-3 rounded-md cursor-pointer">Orange</button>
                <button onClick={handleIndigo} className="bg-indigo-500 text-white font-semibold px-5 py-3 rounded-md cursor-pointer">Indigo</button>
                <Button handleBlue={handleBlue} />

                <div className="absolute bottom-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <h1 className="text-gray-800 font-medium">please open browser console</h1>
                </div>
            </div>
        </>
    )
}