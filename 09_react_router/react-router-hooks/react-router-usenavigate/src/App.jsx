import { Routes, Route } from 'react-router'
import Links from './components/Links/Links'
import Home from './components/Home/Home'
import About from './components/About/About'
import Error from './components/Error/Error'

export default function App() {
    return (
        <>
            <div className="w-full min-h-screen bg-gray-950 flex items-center justify-center flex-col gap-10">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/*" element={<Error />} />
                </Routes>
                <Links />
            </div>
        </>
    )
}