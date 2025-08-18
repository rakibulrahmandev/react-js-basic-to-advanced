import { Routes, Route, Navigate } from 'react-router'
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

export default function App() {
    return (
        <>
            <div className="w-full min-h-screen bg-gray-950 relative">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/*" element={<Navigate to='/'/>} />
                </Routes>
            </div>
        </>
    )
}