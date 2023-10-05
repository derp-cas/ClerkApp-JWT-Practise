import React from "react";
import { Link } from "react-router-dom";

const PublicPage = () => {
    return (
        <main>
            <h1>Public Page</h1>
            <Link to="/sign-in">To the Sign in</Link>
        </main>
    );
};

export default PublicPage;
