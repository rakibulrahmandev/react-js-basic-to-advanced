/* eslint-disable no-unused-vars */
import { useState } from "react"

export default function Example_2() {

    const [brand, setBrand] = useState('Apple')
    const [model, setModel] = useState('16 pro max')
    const [year, setYear] = useState('2024')
    const [color, setColor] = useState('white')

    return (
        <>
            <div className="w-[400px] min-h-[200px] bg-gray-950 flex items-center justify-center flex-col gap-10 rounded-md p-5">
                <h2 className="font-semibold text-3xl text-gray-700">My favourite brand is {brand}!</h2>
                <p className="text-gray-700">Model No. {model}, published year is {year}, color is {color}</p>
            </div>
        </>
    )
}