import { Routes, Route, Navigate } from 'react-router'
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Project from './components/Project/Project';
import JSProject from './components/JSProject/JSProject';
import NodeProject from './components/NodeProject/NodeProject';
import AngularProject from './components/AngularProject/AngularProject';

export default function App() {
    return (
        <>
            <div className="w-full min-h-screen bg-gray-950 relative">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path='/project' element={<Project />}>
                        <Route path='javascript' element={<JSProject />}/>
                        <Route path='nodejs' element={<NodeProject />}/>
                        <Route path='angular' element={<AngularProject />}/>
                    </Route>
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/*" element={<Navigate to='/'/>} />
                </Routes>
            </div>
        </>
    )
}