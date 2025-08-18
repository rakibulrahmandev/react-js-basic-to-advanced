import { NavLink } from 'react-router'

export default function Header() {
    return (
        <>
            <div className="w-full px-5 py-5 bg-gray-900 flex justify-between">
                <div className='w-full'>
                    <h1 className='text-2xl text-white font-medium'>React Router</h1>
                </div>
                <nav className="w-auto space-x-10">
                    <NavLink to="/" className={({isActive}) => isActive ? 'text-emerald-500' : 'text-white'}>
                        Home
                    </NavLink>
                    <NavLink to="/about" className={({isActive}) => isActive ? 'text-emerald-500' : 'text-white'}>
                        About
                    </NavLink>
                    <NavLink to="/contact" className={({isActive}) => isActive ? 'text-emerald-500' : 'text-white'}>
                        Contact
                    </NavLink>
                </nav>
            </div>
        </>
    )
}