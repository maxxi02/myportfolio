"use client";
import { createContext, useEffect, useState } from "react";

type MyContextProps = {
    theme: string;
    toggleTheme: () => void;
};

export const MyContext = createContext<MyContextProps | undefined>(undefined);

const getFromLocalStorage = () => {
    const CheckOut = typeof window !== undefined && window.localStorage.getItem('theme') || 'light';
    return CheckOut;
};

export const MyContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState(() => getFromLocalStorage());

    useEffect(() => {
        const element = document.documentElement;
        localStorage.setItem('theme', theme);
        switch (theme) {
            case 'dark':
                element.classList.remove('light');
                element.classList.add('dark');
                break;
            case 'light':
                element.classList.remove('dark');
                element.classList.add('light');
                break;
            default:
                element.classList.remove('dark', 'light');
                break;
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const ContextValue: MyContextProps = {
        toggleTheme,
        theme,
    };

    return <MyContext.Provider value={ContextValue}>{children}</MyContext.Provider>;
};
