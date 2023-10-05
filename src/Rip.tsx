import { UserButton, useAuth, useUser } from "@clerk/clerk-react";
import React from "react";

// In case the user signs out while on the page.

function App() {
    const { isLoaded, userId, sessionId, getToken } = useAuth();
    const { isSignedIn, user } = useUser();

    if (!isLoaded || !userId) {
        return null;
    }
    return (
        <main className="App">
            <h1>welcome to the protected zone</h1>
            <UserButton />
        </main>
    );
}

export default App;
