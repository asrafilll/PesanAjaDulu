"use client";

import { useState } from "react";

export const AuthLogin = () => {
    const [loginData, setLoginData] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value});
    };

    const handleSubmitlogin = () => {
        console.log(loginData);
    };


    return (
    <main className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-5">
            <h1 className="text-2xl font-bold text-center">Login ke TinggalPesan</h1>
            <input name="NomorHp" placeholder="Nomor Handphone" onChange={handleChange} />
            <input name="Password" placeholder="Password" type="password"  onChange={handleChange} />
            <button onClick={handleSubmitlogin}>Login</button>
            <div>
            <p>Belum memiliki akun? <a href="#" className="text-orange-500 hover:text-orange-700">Register dulu</a></p>
            </div>
            
        </div>
        </main>
    );
};