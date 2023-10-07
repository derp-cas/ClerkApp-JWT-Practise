import { UserButton, useAuth, useUser } from "@clerk/clerk-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

// In case the user signs out while on the page.

function Mainform() {
    const [playerName, setPlayerName] = useState("");
    const [playerEmail, setPlayerEmail] = useState("");
    const [playerPassword, setPlayerPassword] = useState("");
    const [playerAge, setPlayerAge] = useState<number | undefined>(undefined);
    const [playerClass, setPlayerClass] = useState("");
    const [playerBio, setPlayerBio] = useState("");
    //Auth
    const { isLoaded, userId, sessionId, getToken } = useAuth();
    const { isSignedIn, user } = useUser();

    if (!isLoaded || !userId) {
        return null;
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
    };
    return (
        <main className="App">
            <h1>welcome to the protected zone</h1>
            <UserButton />
            <div className="form-container">
                <h2>Deep Rock Galactic Form</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="playerName">Player Name:</label>
                    <input
                        type="text"
                        id="playerName"
                        name="playerName"
                        value={playerName}
                        onChange={(e) => setPlayerName(e.target.value)}
                        required
                    />

                    <label htmlFor="playerEmail">Email:</label>
                    <input
                        type="email"
                        id="playerEmail"
                        name="playerEmail"
                        value={playerEmail}
                        onChange={(e) => setPlayerEmail(e.target.value)}
                        required
                    />

                    <label htmlFor="playerPassword">Password:</label>
                    <input
                        type="password"
                        id="playerPassword"
                        name="playerPassword"
                        value={playerPassword}
                        onChange={(e) => setPlayerPassword(e.target.value)}
                        required
                    />

                    <label htmlFor="playerAge">Age:</label>
                    <input
                        type="number"
                        id="playerAge"
                        name="playerAge"
                        min="18"
                        max="99"
                        value={playerAge || ""}
                        onChange={(e) => setPlayerAge(Number(e.target.value))}
                        required
                    />

                    <label htmlFor="playerClass">Character Class:</label>
                    <select
                        id="playerClass"
                        name="playerClass"
                        value={playerClass}
                        onChange={(e) => setPlayerClass(e.target.value)}
                    >
                        <option value="driller">Driller</option>
                        <option value="gunner">Gunner</option>
                        <option value="scout">Scout</option>
                        <option value="engineer">Engineer</option>
                    </select>

                    <label htmlFor="playerBio">Player Bio:</label>
                    <textarea
                        id="playerBio"
                        name="playerBio"
                        rows={4}
                        value={playerBio}
                        onChange={(e) => setPlayerBio(e.target.value)}
                    ></textarea>

                    <button type="submit">Submit</button>
                </form>
            </div>

            <Link to="/">To Main</Link>
        </main>
    );
}

export default Mainform;
