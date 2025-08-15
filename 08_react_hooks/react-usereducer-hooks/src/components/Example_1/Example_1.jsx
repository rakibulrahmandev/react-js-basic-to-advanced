import { useReducer } from "react"

export default function Example_1() {

    const initialValue = {count: 0}

    
    const reducer = (state, action) => {
        console.log(action);
        switch (action.type) {
            case 'increase': {
                return {count: state.count + 1}
            }
            case 'decrease': {
                return {count: state.count - 1}
            }
            case 'input': {
                return {count: action.payload}
            }
            default: {
                return state
            }
        }
    }
    
    const [state, dispatch] = useReducer(reducer, initialValue)

    return (
        <>
            <div className="w-[550px] min-h-[300px] bg-gray-900 rounded-md p-10 flex items-center justify-center flex-col gap-10">
                <div className="w-full flex items-center justify-center gap-10">
                    <button onClick={() => dispatch({type: 'increase'})} className="text-white font-medium text-lg bg-gray-800 py-3 px-4 rounded-md cursor-pointer">Increase</button>
                    <h1 className="text-white font-semibold text-6xl">{state.count}</h1>
                    <button onClick={() => dispatch({type: 'decrease'})} className="text-white font-medium text-lg bg-gray-800 py-3 px-4 rounded-md cursor-pointer">Decrease</button>
                </div>
                <div className="w-full flex justify-center">
                    <input onChange={(e) => dispatch({type: 'input', payload: Number(e.target.value)})} value={state.count} type="number" className="w-[317px] border border-gray-800 py-4 px-4 outline-none rounded-md text-white text-lg" />
                </div>
            </div>
        </>
    )
}