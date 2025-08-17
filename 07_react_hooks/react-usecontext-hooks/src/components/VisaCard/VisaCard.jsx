import { useContext } from 'react'
import gear from '../../assets/gear.png'
import { MoneyContext } from '../../context/MoneyContext'

export default function VisaCard() {

    const {name, money} = useContext(MoneyContext)

    return (
        <>
            <div className="w-[500px] h-[300px] bg-indigo-950/50 overflow-hidden rounded-xl relative">
                <div className="w-[550px] h-[550px] bg-indigo-900/20 rounded-full  absolute -top-[70%] -left-[40%] "></div>
                <div className="w-[400px] h-[400px] bg-indigo-800/30 rounded-full shadow-2xl absolute -top-[65%] -left-[35%]"></div>
                <div className="w-[300px] h-[300px] bg-indigo-700/50 rounded-full shadow-2xl absolute -top-[55%] -left-[30%]"></div>
                <div className="w-full h-full absolute top-0 left-0 p-5">
                    <div className="w-full flex items-center justify-between">
                        <div className="w-auto">
                            <h1 className="font-medium text-white text-2xl mt-2 ml-2">{name}</h1>
                        </div>
                        <div className='w-[42px] h-[42px]'>
                            <img src={gear} className='opacity-10' />
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-end mt-[14%] pr-1">
                        <h1 className='text-white font-semibold text-5xl'>$ {money}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}