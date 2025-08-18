import { Link, Outlet } from 'react-router'

export default function Project() {
    return (
        <>
            <div className="w-full text-center space-y-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h1 className="text-6xl text-white font-bold">Project</h1>
                <div className="w-full">
                    <ul className="w-auto flex items-center justify-center gap-5">
                        <li className='text-white'><Link to='javascript'>JavaScript</Link></li>
                        <li className='text-white'><Link to='nodejs'>Node.js</Link></li>
                        <li className='text-white'><Link to='angular'>Angular</Link></li>
                    </ul>
                </div>
                <Outlet />
            </div>
        </>
    )
}