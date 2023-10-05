import {
    ClerkProvider,
    RedirectToSignIn,
    SignIn,
    SignUp,
    SignedIn,
    SignedOut,
} from "@clerk/clerk-react";
import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import PublicPage from "./PublicPage";
import App from "./App";

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!clerkPubKey) {
    throw new Error("Missing Publishable Key");
} else {
    console.log("Api Key Loaded");
}

const Main = () => {
    const navigate = useNavigate();
    return (
        <BrowserRouter>
            <ClerkProvider
                publishableKey={clerkPubKey}
                navigate={(to) => navigate(to)}
            >
                <Routes>
                    <Route index element={<PublicPage />} />
                    <Route
                        path="/sign-in/*"
                        element={<SignIn routing="path" path="/sign-in" />}
                    />
                    <Route
                        path="/sign-up/*"
                        element={<SignUp routing="path" path="/sign-up" />}
                    />
                    <Route
                        path="/protected"
                        element={
                            <>
                                <SignedIn>
                                    <App />
                                </SignedIn>
                                <SignedOut>
                                    <RedirectToSignIn />
                                </SignedOut>
                            </>
                        }
                    />
                </Routes>
            </ClerkProvider>
        </BrowserRouter>
    );
};

export default Main;
