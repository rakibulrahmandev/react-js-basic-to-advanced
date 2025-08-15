import { useEffect, useLayoutEffect } from "react"

export default function App() {

    useEffect(() => {
        console.log('Message from useEffect! ');
    }, [])

    useLayoutEffect(() => {
        console.log('Message from useLayoutEffect!');
    }, [])
    

    return (
        <>
            <div className="w-full min-h-screen bg-gray-950 flex items-center justify-center text-white flex-col">
                <h1 className="text-5xl font-semibold">Test Message</h1>
            </div>
        </>
    )
}