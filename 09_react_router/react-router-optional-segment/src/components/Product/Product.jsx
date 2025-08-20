import { Link } from "react-router"

export default function Product() {

    const products = [
        {id: 1, product: 'Apple'},
        {id: 2, product: 'Samsung'},
        {id: 3, product: 'Google'},
        {id: 4, product: 'Tesla'}
    ]

    return (
        <>
            <div className="w-full text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-6xl text-white font-bold">Product</h1>
                <div className="w-full flex items-center justify-center mt-7 gap-5">
                    {
                        products.map((product) => (
                            <p key={product?.id} className="text-white"><Link to={`/product/${product?.id}/${product?.product}`}>{product?.product}</Link></p>
                        ))
                    }
                </div>
            </div>
        </>
    )
}