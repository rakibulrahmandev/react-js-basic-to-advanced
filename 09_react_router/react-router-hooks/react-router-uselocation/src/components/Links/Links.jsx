import { Link } from 'react-router'

export default function Links() {
    return (
        <>
            <div className="w-full flex items-center justify-center">
                <div className="w-auto space-x-2">
                    <Link to="/" className='text-white'>Home</Link>
                    <span className='text-white'>/</span>
                    <Link to="/about" className='text-white'>About</Link>
                </div>
            </div>
        </>
    )
}