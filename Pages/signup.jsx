import React, { useContext, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ProductDataContext } from '../context/context'

function SignUp() {

    const { createEmailPassSignup, creataGoogleSignIn } = useContext(ProductDataContext)

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfo = useRef()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    async function handleSignUp(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfo.current.value) {
            return setError('password Not match')
        }

        try {
            setError('')
            setLoading(true)
            await createEmailPassSignup(emailRef.current.value, passwordConfo.current.value)
            navigate('/login')
        } catch (err) {
            // console.log(err)
            setLoading(false)
        }
    }

    async function handleGoogleSignup() {
        await creataGoogleSignIn()
    }

    return (
        <div className="main">
            <div className="container-1">
                <div className="bgcolor">
                    <div className="logo">
                        <img src="/img/Logo.png" alt="" />
                    </div>

                    <div className="top-detail">
                        <h1>WELCOME SmartShopping</h1>
                        {/* <p>Welcome to Our Furniture Website</p> */}
                    </div>

                    <div className="login-btn">
                        <img src="./img/google.png" alt="" />
                        <button onClick={handleGoogleSignup}>Continue With Google</button>
                    </div>

                    <form onSubmit={handleSignUp}>
                        <p className="errorReg">{error}</p>
                        <div className="login-info">
                            <input type="email" className="email" placeholder="Email" required ref={emailRef} />
                        </div>

                        <div className="login-info">
                            <input type="password" className="passwordforreg" placeholder="Password" required ref={passwordRef} />
                        </div>

                        <div className="login-info">
                            <input type="password" className="passwordforreg" placeholder="Confirm Password" required ref={passwordConfo} />
                        </div>
                        <div className="check-btn">
                            <input type="checkbox" className="check" id='rem' /><span className="rem-me"></span>
                            <label htmlFor="rem">Remember Me</label>
                        </div>

                        <div className="main-bottom">
                            <div className="bottom-info">
                                <button type='submit' className="reg-btn" style={{ cursor: 'pointer', backgroundColor: loading && 'grey' }} disabled={loading} >SignUp</button>
                                <Link to={'/login'} className="account-text">Already Have An Account? <span
                                    className="log-change">Log In</span></Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div>
                <div className="right-img">
                    <img src="./img/registration.png" alt="" />
                    {/* <!-- <img className="bgflower" src="./img/loginpagebg.png" alt=""/> --> */}
                </div>
            </div>
        </div>
    )
}

export default SignUp