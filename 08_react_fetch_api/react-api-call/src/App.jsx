import { useEffect, useState } from "react";
import Card from "./components/Card/Card";

export default function App() {

    const [coffees, setCoffees] = useState([])

    const fetchCoffeeData = async () => {
        try {
            const response = await fetch('https://api.sampleapis.com/coffee/hot')
            if (!response.ok) throw new Error('Network response was not ok.')
            const result = await response.json()
            setCoffees(result || [])
        } catch (err) {
            console.log(err.message);
        }
    }

    useEffect(() => {
        fetchCoffeeData()
    }, [])

    return (
        <>
            <div className="w-full min-h-screen bg-gray-950 p-5 grid grid-cols-4 grid-rows-2 gap-5">
                {
                    coffees.map(coffee => (
                        <Card key={coffee.id} title={coffee?.title} description={coffee?.description} ingredients={coffee?.ingredients} image={coffee?.image}/>
                    ))
                }
            </div>
        </>
    )
}