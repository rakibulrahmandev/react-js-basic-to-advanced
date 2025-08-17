import { Routes, Route } from 'react-router'
import Home from './components/Home/Home'
import About from './components/About/About'

export default function App() {
    return (
        <>
            <div className="w-full min-h-screen bg-gray-950 flex items-center justify-center">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </>
    )
}