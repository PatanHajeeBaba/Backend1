// src/components/AuthForm.js
import React, { useState } from 'react';

const AuthForm = ({ setIsLoggedIn, setUserData, setShowLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(true);  // Toggle between Login and Register

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        if (!email || !password) {
            setError('Please fill in both email and password');
            return;
        }

        if (!isLogin && password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (isLogin) {
            // Simulate login by checking localStorage
            const storedUserData = localStorage.getItem('user');
            if (storedUserData) {
                const parsedUserData = JSON.parse(storedUserData);
                if (parsedUserData.email === email && parsedUserData.password === password) {
                    setIsLoggedIn(true);
                    setUserData(parsedUserData);
                    setShowLogin(false);  // Close login form after successful login
                    localStorage.setItem('user', JSON.stringify(parsedUserData));  // Store in localStorage
                } else {
                    setError('Invalid email or password');
                }
            } else {
                setError('User not found');
            }
        } else {
            // Simulate registration
            const newUser = { email, password };
            localStorage.setItem('user', JSON.stringify(newUser));
            setIsLoggedIn(true);
            setUserData(newUser);
            setShowLogin(false);  // Close login form after successful registration
        }

        // Clear form fields
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <div className='main-parent'>
            
        <div className="auth-form">
            <h2>{isLogin ? 'Login' : 'Register'}</h2>
            {error && <p className="error">{error}</p>}

            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                {!isLogin && (
                    <>
                        <label>Confirm Password:</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </>
                )}
                <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
            </form>

            <p className='c-p'>
                {isLogin ? (
                    <span>
                        Don't have an account?{' '}
                        <a href="#!" onClick={() => setIsLogin(false)}>
                            Register here
                        </a>
                    </span>
                ) : (
                    <span>
                        Already have an account?{' '}
                        <a href="#!" onClick={() => setIsLogin(true)}>
                            Login here
                        </a>
                    </span>
                )}
            </p>
        </div>
     </div>
    );
};

export default AuthForm;

