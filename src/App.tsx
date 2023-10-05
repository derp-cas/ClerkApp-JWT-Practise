import {
    ClerkProvider,
    RedirectToSignIn,
    SignIn,
    SignUp,
    SignedIn,
    SignedOut,
} from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import PublicPage from "./PublicPage";
import Rip from "./Rip";

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!clerkPubKey) {
    throw new Error("Missing Publishable Key");
} else {
    console.log("Api Key Loaded");
}

function ClerkProviderWithRoutes() {
    const navigate = useNavigate();

    return (
        <ClerkProvider
            publishableKey={clerkPubKey ?? ""}
            navigate={(to) => navigate(to)}
        >
            <Routes>
                <Route path="/" element={<PublicPage />} />
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
                                <Rip />
                            </SignedIn>
                            <SignedOut>
                                <RedirectToSignIn />
                            </SignedOut>
                        </>
                    }
                />
            </Routes>
        </ClerkProvider>
    );
}

function App() {
    return (
        <BrowserRouter>
            <ClerkProviderWithRoutes />
        </BrowserRouter>
    );
}

export default App;
