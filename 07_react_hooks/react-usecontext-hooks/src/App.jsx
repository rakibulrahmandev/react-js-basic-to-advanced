import MasterCard from "./components/MasterCard/MasterCard";
import VisaCard from "./components/VisaCard/VisaCard";

export default function App() {
    return (
        <>
            <div className="w-full min-h-screen bg-gray-950 flex items-center justify-center gap-10">
                <VisaCard />
                <MasterCard />
            </div>
        </>
    )
}