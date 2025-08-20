import { useLocation } from "react-router"

export default function About() {

    const location = useLocation()

    return (
        <>
            <div className="w-auto text-center flex justify-center flex-col gap-5">
                <h1 className="text-white text-6xl font-bold">About</h1>
                <p className="text-white text-lg">pathname: "{location?.pathname}"</p>
            </div>
        </>
    )
}