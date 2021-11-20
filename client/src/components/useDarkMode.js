import { useState } from "react";
import { useCookies } from 'react-cookie';

export const useDarkMode = () => {

    const [cookies, setCookie] = useCookies(['theme'])
    const [theme, setTheme] = useState(cookies.theme);

    const toggleTheme = () => {
        if (theme === 'dark') {
            setTheme('light')
            setCookie('theme', 'light', { path: '/' })
        } else {
            setTheme('dark');
            setCookie('theme', 'dark', { path: '/' })
        }
    }

    return [theme, toggleTheme];
}