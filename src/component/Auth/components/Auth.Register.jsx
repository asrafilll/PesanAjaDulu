"use client";

import { useState } from "react";

export const AuthRegister = () => {
    const [registerData, setRegisterData] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegisterData({ ...registerData, [name]: value});
    };

    const handleSubmitRegister = () => {
        console.log(registerData);
    };


    return (
    <main className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-5">
            <h1 className="text-2xl font-bold text-center">Register Toko Baru</h1>
            <input name="FullName" placeholder="Nama Lengkap" onChange={handleChange} />
            <input name="Toko" placeholder="Nama Toko" onChange={handleChange} />
            <input name="NomorHp" placeholder="Nomor Handphone" onChange={handleChange} />
            <input name="Password" placeholder="Password" type="password"  onChange={handleChange} />
            <button onClick={handleSubmitRegister}>Register</button>
            <div>
            <p>Sudah memiliki akun? <a href="#" className="text-orange-500 hover:text-orange-700">Login</a></p>
            </div>
            
        </div>
        </main>
    );
};