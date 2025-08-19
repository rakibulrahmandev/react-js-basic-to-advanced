import { useNavigate } from "react-router"

export default function Error() {

    const navigate = useNavigate()

    return (
        <>
            <div className="w-auto flex justify-center flex-col gap-5">
                <h1 className="text-white text-6xl font-bold">404</h1>
                <button className="text-white cursor-pointer" onClick={() => navigate('/')}>Go Home</button>
            </div>
        </>
    )
}