import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
export default function ToggleThemeButton() {
    const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
    
    return (
        <button onClick={toggleDarkMode} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-sky-400 rounded shadow mx-2">
            {isDarkMode ? '☀️' : '🌑'}
        </button>
    );
}
