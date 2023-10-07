import { UserButton, useAuth, useUser, UserProfile } from "@clerk/clerk-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PublicPage = () => {
    const [token, setToken] = useState<string | null>(null);
    const { isLoaded, userId, sessionId, getToken, signOut } = useAuth();
    const { isSignedIn, user } = useUser();
    const firstName = user?.firstName;

    useEffect(() => {
        if (isSignedIn) {
            getToken().then((accessToken) => {
                // Do something with the access token (e.g., set it in state)
                setToken(accessToken);
            });
        }
    }, [isSignedIn]);

    return (
        <main>
            <h1>Public Page</h1>
            {isSignedIn ? (
                <div>
                    <h2>Hello {firstName} </h2>

                    <Link to="/protected">To Protected</Link>
                    <h2>{token}</h2>
                    <UserButton />
                    <button onClick={() => signOut()}>sign out</button>
                </div>
            ) : (
                <div>
                    <h2>Hello, please Log or Sign in here before continuing</h2>
                    <Link to="/sign-in">Click to Sign-In</Link>
                    <Link to="/sign-up">Click to Sign-Up</Link>
                </div>
            )}
        </main>
    );
};

export default PublicPage;
