import React, { useState } from 'react';
import { AuthContext } from '../context';

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({})
    const value = { auth, setAuth }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;