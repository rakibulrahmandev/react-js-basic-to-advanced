import Example_1 from "./components/Example_1/Example_1";
import Example_2 from "./components/Example_2/Example_2";
import Example_3 from "./components/Example_3/Example_3";
import Example_4 from "./components/Example_4/Example_4";
import Example_5 from "./components/Example_5/Example_5";
import Example_6 from "./components/Example_6/Example_6";

export default function App() {
    return (
        <>
            <div className="w-full min-h-screen flex items-center justify-center flex-wrap bg-gray-700 gap-5">
                <Example_1 />
                <Example_2 />
                <Example_3 />
                <Example_4 />
                <Example_5 />
                <Example_6 />
            </div>
        </>
    )
}