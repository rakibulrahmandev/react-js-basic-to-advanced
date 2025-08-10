import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";

export default function App() {
  return (
    <>
      <div className="bg-gray-950 w-full min-h-screen flex flex-col justify-between">
        <Header />
        <Home />
        <Footer />
      </div>
    </>
  )
}