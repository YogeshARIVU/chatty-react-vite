import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import ChatRoom from './components/ChatRoom';
import { isAuthenticated } from './utils/auth'; // your own util

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route
                    path="/chat"
                    element={isAuthenticated() ? <ChatRoom /> : <Navigate to="/login" />}
                />
                <Route
                    path="*"
                    element={<Navigate to={isAuthenticated() ? '/chat' : '/login'} />}
                />
            </Routes>
        </BrowserRouter>
    );
}
