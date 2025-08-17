export default function Card({ title, description, ingredients, image }) {
    return (
        <>
            <div className="w-full min-h-[500px] bg-gray-900 rounded-md overflow-hidden">
                <div className="w-full h-[250px] bg-black overflow-hidden">
                    <img src={image || 'https://plus.unsplash.com/premium_photo-1680303237111-35809e47fcc1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cXVlc3Rpb24lMjBtYXJrfGVufDB8fDB8fHww'} alt="" className="w-full h-full object-cover"/>
                </div>
                <div className="w-full p-5">
                    <div className="w-full">
                        <h1 className="text-3xl text-white font-semibold">{title}</h1>
                        <p className="text-lg text-white mt-3">{description}</p>
                    </div>
                    <div className="w-full mt-4">
                        <p className="text-2xl text-white font-medium">Ingredients:</p>
                        <ul className="w-full pl-4.5 mt-2">
                            {
                                ingredients.map((ing, idx) => (
                                    <li key={idx} className="list-disc text-lg text-white">{ing   }</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}