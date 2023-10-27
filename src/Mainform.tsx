import { UserButton, useAuth, useUser } from "@clerk/clerk-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { object, string, number, date, InferType } from "yup";
import { useFormik } from "formik";
import { basicSchema } from "./schemas";
import { FieldValues, useForm } from "react-hook-form";

const onSubmit = (values: any, actions: any) => {
    console.log("submited");
    actions.resetForm();
};

const Mainform = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        getValues,
    } = useForm();
    //Auth

    const onSubmit = async (data: FieldValues) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        reset();
    };

    return (
        <StyledMainForm>
            <h1>welcome to the protected zone</h1>
            <UserButton />
            <div className="form-container">
                <h2>Deep Rock Galactic Form</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="playerName">Player Name:</label>
                    <input
                        {...register("name", { required: "Name is required" })}
                        type="text"
                        id="name"
                    />
                    {errors.name && <p>{`${errors.name.message}`}</p>}

                    <label htmlFor="playerEmail">Email:</label>
                    <input
                        {...register("email", {
                            required: "Email is required",
                        })}
                        type="email"
                        id="email"
                    />
                    {errors.email && <p>{`${errors.email.message}`}</p>}

                    <label htmlFor="playerPassword">Password:</label>
                    <input
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 8,
                                message:
                                    "Password must be at least 8 characters",
                            },
                        })}
                        type="password"
                        id="password"
                    />
                    {errors.password && <p>{`${errors.password.message}`}</p>}

                    <label htmlFor="confirmPlayerPassword">
                        Confirm Password:
                    </label>
                    <input
                        {...register("confirmPassword", {
                            required: "You must confirm your password",
                            validate: (value) =>
                                value === getValues("password") ||
                                "Password must match",
                        })}
                        type="password"
                        id="confirmPassword"
                    />
                    {errors.confirmPassword && (
                        <p>{`${errors.confirmPassword.message}`}</p>
                    )}

                    <label htmlFor="playerAge">Age:</label>
                    <input
                        {...register("age", { required: "Age is required" })}
                        type="number"
                        id="age"
                        min="12"
                        max="99"
                    />
                    {errors.age && <p>{`${errors.age.message}`}</p>}

                    <label htmlFor="playerClass">Character Class:</label>
                    <select
                        {...register("class", {
                            required: "Class is required",
                        })}
                        id="class"
                    >
                        <option value="driller">Driller</option>
                        <option value="gunner">Gunner</option>
                        <option value="scout">Scout</option>
                        <option value="engineer">Engineer</option>
                    </select>
                    {errors.class && <p>{`${errors.class.message}`}</p>}

                    <label htmlFor="playerBio">Player Bio:</label>
                    <textarea
                        {...register("bio", { required: "Bio is required" })}
                        id="bio"
                        rows={4}
                    ></textarea>
                    {errors.bio && <p>{`${errors.bio.message}`}</p>}

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
