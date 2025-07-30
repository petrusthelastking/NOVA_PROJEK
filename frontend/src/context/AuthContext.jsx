import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('authToken'));

    // Efek ini berjalan saat aplikasi pertama kali dimuat
    useEffect(() => {
        if (token) {
            try {
                const decodedUser = jwtDecode(token);
                // Cek apakah token sudah kedaluwarsa
                if (decodedUser.exp * 1000 > Date.now()) {
                    setUser(decodedUser);
                } else {
                    // Token kedaluwarsa, hapus dari storage
                    localStorage.removeItem('authToken');
                    setUser(null);
                }
            } catch (error) {
                console.error("Invalid token:", error);
                localStorage.removeItem('authToken');
            }
        }
    }, [token]);

    const login = (newToken) => {
        localStorage.setItem('authToken', newToken);
        setToken(newToken);
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        setToken(null);
        setUser(null);
    };

    const value = {
        user,
        token,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
