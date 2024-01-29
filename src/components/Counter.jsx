import { useContext } from "react"
import { CounterContext } from "./CounterContext"
import { ThemeContext } from "./ThemeContext";

export default function Counter() {
    const {conteo, incrementar, decrementar} = useContext(CounterContext);
    const { isDarkMode } = useContext(ThemeContext);
    return (
        <div className={`py-2 px-4 border ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} font-semibold rounded shadow`}>
            {conteo}
        </div>
    )
}
