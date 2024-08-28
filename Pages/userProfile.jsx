import React, { useContext, useState } from 'react'
import { ProductDataContext } from '../context/context'
import '../src/login.css'
import { useNavigate, useSearchParams } from 'react-router-dom'

function UserProfile() {

    const { user, userLogout } = useContext(ProductDataContext)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()

    async function handleLogout(e) {
        e.preventDefault()
        try {
            setError('')
            setLoading(true)
            await userLogout()
            navigate('/login')
        } catch (error) {
            setError('error to signout')
        }
        setLoading(false)
    }

    return (
        <>
            <h2 style={{ textAlign: 'center' }} className='profile-head'>User Profile Card</h2>
            <div className="card-profile-user">
                <img src={user?.photoURL} alt="John" style={{ width: '100%' }} />
                <h1>{user?.displayName}</h1>
                <p className="title">CEO & Founder, Example</p>
                <p>Harvard University</p>
                <p className='errorReg'>{error}</p>
                <button onClick={handleLogout} className='userlogout'>LogOut</button>
            </div>
        </>
    )
}

export default UserProfile