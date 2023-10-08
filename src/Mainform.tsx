import { UserButton, useAuth, useUser } from "@clerk/clerk-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { object, string, number, date, InferType } from "yup";
import { useFormik } from "formik";
import { basicSchema } from "./schemas";

const onSubmit = (values: any, actions: any) => {
    console.log("submited");
    actions.resetForm();
};

const Mainform = () => {
    //Auth
    const {
        values,
        errors,
        touched,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit,
    } = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            age: "",
            class: "",
            bio: "",
        },
        validationSchema: basicSchema,

        onSubmit,
    });

    console.log(errors);

    const { isLoaded, userId, sessionId, getToken } = useAuth();
    const { isSignedIn, user } = useUser();

    if (!isLoaded || !userId) {
        return null;
    }

    return (
        <StyledMainForm>
            <h1>welcome to the protected zone</h1>
            <UserButton />
            <div className="form-container">
                <h2>Deep Rock Galactic Form</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="playerName">Player Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                            errors.name && touched.name ? "input-error" : ""
                        }
                    />
                    {errors.name && touched.name && (
                        <p className="error">{errors.name}</p>
                    )}
                    <label htmlFor="playerEmail">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                            errors.email && touched.email ? "input-error" : ""
                        }
                    />
                    {errors.email && touched.email && (
                        <p className="error">{errors.email}</p>
                    )}

                    <label htmlFor="playerPassword">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                            errors.password && touched.password
                                ? "input-error"
                                : ""
                        }
                    />
                    {errors.password && touched.password && (
                        <p className="error">{errors.password}</p>
                    )}

                    <label htmlFor="confirmPlayerPassword">
                        Confirm Password:
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                            errors.confirmPassword && touched.confirmPassword
                                ? "input-error"
                                : ""
                        }
                    />
                    {errors.confirmPassword && touched.confirmPassword && (
                        <p className="error">{errors.confirmPassword}</p>
                    )}

                    <label htmlFor="playerAge">Age:</label>
                    <input
                        type="number"
                        id="age"
                        min="12"
                        max="99"
                        value={values.age}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                            errors.age && touched.age ? "input-error" : ""
                        }
                    />
                    {errors.age && touched.age && (
                        <p className="error">{errors.age}</p>
                    )}

                    <label htmlFor="playerClass">Character Class:</label>
                    <select
                        id="class"
                        value={values.class}
                        onChange={handleChange}
                        className={
                            errors.class && touched.class ? "input-error" : ""
                        }
                    >
                        <option value="driller">Driller</option>
                        <option value="gunner">Gunner</option>
                        <option value="scout">Scout</option>
                        <option value="engineer">Engineer</option>
                    </select>
                    {errors.class && touched.class && (
                        <p className="error">{errors.class}</p>
                    )}

                    <label htmlFor="playerBio">Player Bio:</label>
                    <textarea
                        id="bio"
                        rows={4}
                        value={values.bio}
                        onChange={handleChange}
                        className={
                            errors.bio && touched.bio ? "input-error" : ""
                        }
                    ></textarea>
                    {errors.bio && touched.bio && (
                        <p className="error">{errors.bio}</p>
                    )}

                    <button disabled={isSubmitting} type="submit">
                        Submit
                    </button>
                </form>
            </div>

            <Link to="/">To Main</Link>
        </StyledMainForm>
    );
};

export const StyledMainForm = styled.main`
    font-family: Arial, sans-serif;
    background-color: #1e1e1e;
    color: #c4c4c4;
    text-align: center;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;

    h1 {
        margin-top: 0;
    }

    .form-container {
        background-color: #2c2c2c;
        padding: 20px;
        border-radius: 10px;
        width: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    label {
        display: block;
        margin-bottom: 5px;
        font-size: 14px;
    }

    input[type="text"],
    input[type="email"],
    input[type="password"],
    input[type="number"],
    select,
    textarea {
        width: 90%;
        margin: 0 0 15px 0;
        padding: 10px;
        background-color: #333;
        border: none;
        border-radius: 5px;
        color: #c4c4c4;
    }
    select {
        width: 100%;
    }

    button[type="submit"] {
        background-color: #17a2b8;
        color: #fff;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
    }

    button[type="submit"]:hover {
        background-color: #1289a7;
    }
    button:disabled {
        opacity: 0.35;
    }

    input.input-error,
    select.input-error {
        border: 1px solid;
        border-color: red;
    }
`;

export default Mainform;
