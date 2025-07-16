import React from "react";
import useToggle from "../custom/useToggle";
import "./Toggle.css";

const ToggleDemo = () => {
    const [showPassword, togglePassword] = useToggle(false);
    const [darkMode, toggleDarkMode] = useToggle(false);
    const [showSecret, toggleSecret] = useToggle(false);
    const [liked, toggleLike] = useToggle(false);
    const [notify, toggleNotify] = useToggle(false);
    const [showForm, toggleForm] = useToggle(false);

    return (
        <div className={darkMode ? "dark" : "light"}>
            <h2>Toggle Feature Demo</h2>

            <div className="box">
                <label>Password: </label>
                <input type={showPassword ? "text" : "password"} />
                <button onClick={togglePassword}>
                    {showPassword ? "Hide" : "Show"}
                </button>
            </div>

            <div className="box">
                <p>Theme: {darkMode ? "Dark" : "Light"}</p>
                <button onClick={toggleDarkMode}>Toggle Theme</button>
            </div>

            <div className="box">
                <button onClick={toggleSecret}>
                    {showSecret ? "Hide Secret" : "Show Secret"}
                </button>
                {showSecret && <p>🎉 This is a secret message!</p>}
            </div>

            <div className="box">
                <button onClick={toggleLike}>
                    {liked ? "❤️ Liked" : "🤍 Like"}
                </button>
            </div>

            <div className="box">
                <label>
                    <input
                        type="checkbox"
                        checked={notify}
                        onChange={toggleNotify}
                    />
                    Enable Notifications
                </label>
            </div>

            <div className="box">
                <button onClick={toggleForm}>
                    {showForm ? "Hide Form" : "Show Form"}
                </button>
                {showForm && (
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        alert("Form submitted!");
                    }}>
                        <input placeholder="Name" />
                        <input placeholder="Email" />
                        <button type="submit">Submit</button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ToggleDemo;
