import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    UserButton,
    useUser,
    RedirectToSignIn,
    SignIn,
    SignUp,
} from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicPage from "./PublicPage";
import Main from "./Main";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>
);
