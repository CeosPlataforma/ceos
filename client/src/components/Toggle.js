import React from 'react';

export const Toggle = ({ theme, toggleTheme }) => {

    console.log(theme)

    return (
        <div className="d-flex align-items-center">
            <span
                style={{ color: theme === 'dark' ? "grey" : "yellow" }}
            >☀︎</span>
            <div className="switch-checkbox">
                <label className="switch">
                    <input
                        type="checkbox"
                        onChange={toggleTheme}
                    />
                    <span className="slider round"> </span>
                </label>
            </div>
            <span
                style={{ color: theme === 'dark' ? "#c96dfd" : "grey" }}
            >☽</span>
        </div>
    )
}