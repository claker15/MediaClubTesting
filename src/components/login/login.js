import React from "react";
import './login.css'
import { Card, TextInput, Button } from "react-materialize";

function Login() {

    return (
        <div className="loginContainer">
            <Card>
                <h2>Log-In</h2>
                <TextInput label="Email"></TextInput>
                <TextInput label="Password" password></TextInput>
                <Button className="loginButton">Login</Button>
            </Card>
        </div>
    )

}

export default Login