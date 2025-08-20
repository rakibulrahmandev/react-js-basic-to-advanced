import { Link } from 'react-router'

export default function Header() {
    return (
        <>
            <div className="w-full p-5 bg-gray-900 flex justify-between">
                <div className="w-auto">
                    <h1 className="text-2xl text-white font-semibold">React Router</h1>
                </div>
                <ul className="w-auto flex items-center gap-5">
                    <li className="text-white">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="text-white">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="text-white">
                        <Link to="/product">Product</Link>
                    </li>
                    <li className="text-white">
                        <Link to="/product/list">Product list</Link>
                    </li>
                    <li className="text-white">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}