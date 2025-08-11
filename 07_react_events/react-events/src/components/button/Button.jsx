export default function Button({ handleBlue }) {
    return (
        <>
            <button onClick={handleBlue} className="bg-blue-500 text-white font-semibold px-5 py-3 rounded-md cursor-pointer">Blue</button>
        </>
    )
}