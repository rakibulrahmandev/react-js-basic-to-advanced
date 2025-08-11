import Card from "./components/Card";
import MainLayout from "./layout/MainLayout";

export default function App() {
    return (
        <>
            <div className="w-full min-h-screen bg-gray-950">
                <MainLayout>
                    <Card />
                    <Card text="Rakibul" />
                    <Card text="Rahman" />
                </MainLayout>
            </div>
        </>
    )
}