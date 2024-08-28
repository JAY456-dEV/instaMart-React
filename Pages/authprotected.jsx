import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../config/firebase-config';

export const WithAuthProtection = ({ children }) => {
    const [authChecked, setAuthChecked] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setAuthChecked(true);
        });

        return () => unsubscribe();
    }, []);

    if (!authChecked) {
        return <div className='loading-Main-Page'>
            <div className='loader'></div>
        </div>;
    }

    if (!currentUser) {
        return <Navigate to='/login' replace />;
    }

    return children;
};