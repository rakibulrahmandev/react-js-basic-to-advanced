/* eslint-disable no-unused-vars */
import { useState } from "react"

export default function Example_3() {

    const [phone, setPhone] = useState({
        brand: 'Samsung',
        model: 'S24 ultra',
        year: '2024',
        color: 'black'
    })

    return (
        <>
            <div className="w-[400px] min-h-[200px] bg-gray-950 flex items-center justify-center flex-col gap-10 rounded-md p-5">
                <h2 className="font-semibold text-3xl text-gray-700">My favourite brand is {phone.brand} !</h2>
                <p className="text-gray-700">Model No. {phone.model} , published year is {phone.year}, color is {phone.color}</p>
            </div>
        </>
    )
}