import React from "react";
import "./login.css"

export default function Login() {
    return(
        <>
        <div id="login_body">
            <nav>
                <img src="logo.svg" alt="logo" />
            </nav>
            <div className="form_wrapper">
                <h2>Sign In</h2>
                <form action="#">
                <div className="form_control">
                    <input placeholder="  Enter the Email id or Phone number" type="text" />
                </div>
                <div className="form_control">
                    <input placeholder="  Enter the password" type="password" />
                </div>
                <div id="submit">
                    <button>Sign In</button>
                </div>
                <p>OR</p>
                <div id="signCode">
                    <button>Use a sign-in code</button>
                </div>
                <div id="forget">
                    <a href="#">Forgot Password?</a>
                </div>
                <div className="form_help">
                    <div className="remember">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Remember me</label>
                    </div>
                </div>
                </form>
                <p>
                New to StreamHaven?<a href="#">Sign up now</a>
                </p>
                <div id="foot">
                <small>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot.
                    <a href="#">Learn More</a>
                </small>
                </div>
            </div>
        </div>
        </>
    );
}