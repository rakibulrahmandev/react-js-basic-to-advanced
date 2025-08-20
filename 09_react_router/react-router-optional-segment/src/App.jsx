import { Routes, Route } from 'react-router'
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import About from './components/About/About';
import Product from './components/Product/Product';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Contact from './components/Contact/Contact';
import Error from './components/Error/Error';

export default function App() {
    return (
        <>
            <div className="w-full min-h-screen bg-gray-950 relative">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/product" element={<Product />} />
                    {/* optional segment */}
                    <Route path="/product/list?" element={<Product />} />
                    {/* dynamic segment */}
                    <Route path="/product/:id/:name?" element={<ProductDetails />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/*" element={<Error />} />
                </Routes>
            </div>
        </>
    )
}