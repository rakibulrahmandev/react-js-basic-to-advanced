import { useEffect, useState } from "react"

export default function useLocalStorage(key, initialVal) {

    const [value, setValue] = useState(
        localStorage.getItem(key) ? localStorage.getItem(key) : initialVal
    )

    useEffect(() => {
        localStorage.setItem(key, value)
    }, [value, key])

    return [value, setValue]
}