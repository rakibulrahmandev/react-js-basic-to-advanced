import { useParams } from "react-router"

export default function ProductDetails() {

    const params = useParams()

    return (
        <>
            <div className="w-full text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-6xl text-white font-bold">Product Details</h1>
                <div className="w-full text-center mt-7">
                    <p className="text-white">product id: {params?.id}</p>
                </div>
            </div>
        </>
    )
}