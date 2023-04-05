import React, { useEffect, useState } from "react";
import Validation from "./Validation";
import "./login.css"

const Login = () => {

    const [values, setValues] = useState({
        username: '',
        password: ''
    })

    const [errors, setError] = useState({})

    function handleChange(e) {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        setError(Validation(values));
    }


    useEffect(() => {
        if (Object.keys(errors).length === 0 && (values.username !== "" && values.password !== "")) {
            alert("Form Submitted");
        }
    }, [errors])


    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h1>Login Form</h1>
                <div className="ui divider"></div>
                <div className="ui form">
                    <div className="field">
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            onChange={handleChange}
                            value={values.username}
                        />
                    </div>
                    {errors.username && <p style={{ color: "red", fontSize: "13px" }}>{errors.username}</p>}
                    <div className="field">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            onChange={handleChange}
                            value={values.password}
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                        />
                    </div>
                    {errors.password && <p style={{ color: "red", fontSize: "13px" }}>{errors.password}</p>}
                    <button className="fluid ui button blue">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Login