import { Link } from 'react-router'

export default function Header() {
    return (
        <>
            <div className="w-full px-5 py-5 bg-gray-900 flex justify-between">
                <div className='w-full'>
                    <h1 className='text-2xl text-white font-medium'>React Router</h1>
                </div>
                <nav className="w-auto space-x-10">
                    <Link to="/">
                        <span className='text-white'>Home</span>
                    </Link>
                    <Link to="/about">
                        <span className='text-white'>About</span>
                    </Link>
                    <Link to="/contact">
                        <span className='text-white'>Contact</span>
                    </Link>
                </nav>
            </div>
        </>
    )
}