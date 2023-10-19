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
    <main className="h-screen flex justify-center items-center">
        <div className="w-[340px] space-y-2">
            <input name="Full Name" onChange={handleChange} />
            <input name="Nama Toko" onChange={handleChange} />
            <input name="Nomor HP" onChange={handleChange} />
            <input name="Password" onChange={handleChange} />
            <button onClick={handleSubmitRegister}>Sign Up</button>
        </div>
        </main>
    )
};