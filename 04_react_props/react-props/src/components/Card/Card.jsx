export default function Card(props) {

    // let's check props:
    console.log(props);

    // let's destructure props:
    const {countryName, info, flag} = props;

    return (
        <>
            <div className="w-[600px] min-h-[400px] bg-gray-900 rounded-xl overflow-hidden flex items-center justify-center ">
                <div className="w-1/2 h-[400px]">
                    <img src={flag} alt="flag image" className="w-full h-full object-fill" />
                </div>
                <div className="w-1/2 h-[400px] p-4">
                    <h1 className="text-3xl text-white font-semibold">{countryName}</h1>
                    <ul className='text-white mt-4 space-y-1'>
                        {
                            Object.keys(info).map((information, idx) => ( 
                                <li key={idx} className='font-normal'>
                                    <span className='font-semibold'>{information}:</span>
                                    <span className='text-gray-500'> {info[information]}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}