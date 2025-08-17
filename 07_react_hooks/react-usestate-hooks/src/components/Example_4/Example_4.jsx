import { useState } from "react"

export default function Example_4() {

    const [phone, setPhone] = useState({
        brand: 'Samsung',
        model: 'S24 ultra',
        year: '2024',
        color: 'black'
    })

    const handleColor = () => {
        setPhone((change) => {
            return {...change, color: 'white'}
        })
    }

    return (
        <>
            <div className="w-[400px] min-h-[200px] bg-gray-950 flex items-center justify-center flex-col gap-10 rounded-md p-5">
                <h2 className="font-semibold text-3xl text-gray-700">My favourite brand is {phone.brand} !</h2>
                <p className="text-gray-700">Model No. {phone.model} , published year is {phone.year}, color is {phone.color}</p>
                <button onClick={handleColor} className="w-[140px] py-3 border border-gray-700 font-medium text-lg text-gray-700 rounded-md cursor-pointer transition-colors duration-100 ease-in hover:bg-gray-700/20">Change Color</button>
            </div>
        </>
    )
}