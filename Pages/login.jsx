import React, { useContext, useRef, useState } from 'react'
import '../src/login.css'
import { Link, useNavigate } from 'react-router-dom'
import { ProductDataContext } from '../context/context'


function LoginPage() {

    const { userLogin, creataGoogleSignIn } = useContext(ProductDataContext)

    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    async function handleLogin() {
        try {
            setLoading(true)
            await userLogin(emailRef.current.value, passwordRef.current.value)
            navigate('/')
        } catch (error) {
            setError('Email Wrong')
        }
        setLoading(false)
    }

    async function handleGoogleLogin() {
        await creataGoogleSignIn()
        navigate('/')
    }


    return (
        <div className="login-main">
            <div className="container-2">
                <div className="inside-info">
                    <div className="right-info">
                        <div className="login-logo">
                            <img src="../img/Logo.png" alt="" />
                        </div>

                        <div className="login-top-detail">
                            <h1>Welcome</h1>
                            {/* <p>We are glad to see you back with us</p> */}
                        </div>
                        <p>For Random Email Pass You Can Use: try@gmail.com
                            <br />password: 12345678</p>
                        <div className="input-main">
                            <div className="login-page-input">
                                {/* <i className="fa-regular fa-user"></i> */}
                                <input type="text" className="username" placeholder="Email"
                                    required ref={emailRef} />
                                <p className="userError">{error}</p>
                            </div>

                            <div className="login-page-input">
                                {/* <i className="fa-solid fa-lock "></i>  */}
                                <input type="password" className="password"
                                    placeholder="Password" required ref={passwordRef} />
                                <p className="passError"></p>
                            </div>
                        </div>

                        <div className="login-btn-2">
                            <button disabled={loading} style={{ backgroundColor: loading && 'grey' }} onClick={handleLogin}>LOGIN</button>
                        </div>

                        <div className='newuser'>
                            <p>New User ?</p>
                            <Link to={'/signup'}> SignUp</Link>
                        </div>
                        <div className=" log-other">
                            <h4 className="log-other-1">Login</h4> <span>With Others</span>
                        </div>

                        <div className="log-other-btn">
                            <div className="log-google" onClick={handleGoogleLogin} style={{ cursor: "pointer" }}>
                                <img src="https://i.ibb.co/tHGYY9Z/google.png" alt="" />
                                <a>Login with <h4>Google</h4></a>
                            </div>
                            {/* 
                            <div className="log-google">
                                <img src="./img/facebook.png" alt="" />
                                <a href="https://facebook.com">Login with <h4>FaceBook</h4></a>
                            </div> */}
                        </div>

                    </div>

                    <div className="left-info-right">
                        <img src="https://i.ibb.co/s6SxHPm/loginpage.png" alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LoginPage
