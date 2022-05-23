import React, { useState, useEffect }  from 'react';
import Image from 'next/image';
import styles from './ThemeToggle.module.css';


const ThemeToggle = () => {
    const [activeTheme, setActiveTheme] = useState("light");
    const inactiveTheme = activeTheme === "light" ? "dark" : "light";

    useEffect(() => {
        const savedTheme = window.localStorage.getItem("theme");
        savedTheme && setActiveTheme(savedTheme);
    }, []);

    useEffect(() => {
        document.body.dataset.theme = activeTheme;
        window.localStorage.setItem("theme", activeTheme);
    }, [activeTheme]);

    return (
        <div className={styles.theme_switch}>
            <span>{inactiveTheme}</span>
            <button
              aria-label={`Change to ${inactiveTheme} mode`}
              title={`Change to ${inactiveTheme} mode`}
              type="button"
              onClick={() => setActiveTheme(inactiveTheme)}
            >
                <span aria-hidden={true} className={`${styles.theme_sun} ${activeTheme === "light" ? "" : `${styles.animate_sun}`}`}>
                    <Image src="/images/icon-sun.svg" alt="sun" width={20} height={20} />
                </span>
                <span aria-hidden={true} className={`${styles.theme_moon} ${activeTheme === "dark" ? `${styles.animate_moon}` : "" }`}>
                    <Image src="/images/icon-moon.svg" alt="moon" width={20} height={20} />
                    </span>
            </button>
        </div>
    );
};

export default ThemeToggle;