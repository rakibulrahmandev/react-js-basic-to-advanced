export default function Card({ text = "Hello world!"}) {
    return (
        <>
            <div className="w-full h-[500px] bg-gray-900 flex-1 rounded-lg p-5 flex items-center justify-center">
                <h1 className="text-2xl text-white">{text}</h1>
            </div>
        </>
    )
}