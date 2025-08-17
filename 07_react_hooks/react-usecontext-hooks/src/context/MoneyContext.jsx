import { createContext } from "react"

// eslint-disable-next-line react-refresh/only-export-components
export const MoneyContext = createContext()

const ContextProvider = (props) => {

    const name = "Rakibul Rahman"
    const money = "548,003,060"

    return (
        <MoneyContext.Provider value={{name, money}}>
            {props.children}
        </MoneyContext.Provider>
    )
}

export default ContextProvider