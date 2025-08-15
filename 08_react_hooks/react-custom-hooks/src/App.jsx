import Example_1 from "./components/Example_1/Example_1";
import Example_2 from "./components/Example_2/Example_2";

export default function App() {
    return (
        <>
            <div className="w-full min-h-screen bg-gray-950 flex items-center justify-center gap-10">
                <Example_1 />
                <Example_2 />
            </div>
        </>
    )
}