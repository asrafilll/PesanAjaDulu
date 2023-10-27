"use client";

import Link from "next/link";
import { useState } from "react";

export const Register = () => {
  const [registerData, setRegisterData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleSubmitRegister = () => {
    console.log(registerData);
  };

  return (
    <main className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-5">
        <h1 className="text-2xl font-bold text-center">Register Toko Baru</h1>
        <input
          name="FullName"
          placeholder="Nama Lengkap"
          onChange={handleChange}
          className="py-2"
        />
        <input
          className="py-2"
          name="Toko"
          placeholder="Nama Toko"
          onChange={handleChange}
        />
        <input
          name="NomorHp"
          placeholder="Nomor Handphone"
          onChange={handleChange}
          className="py-2"
        />
        <input
          name="Password"
          placeholder="Password"
          type="password"
          onChange={handleChange}
          className="py-2"
        />
        <button
          className="hover:bg-orange-600 transition-colors ease-in-out duration-300"
          onClick={handleSubmitRegister}
        >
          Register
        </button>
        <div>
          Sudah memiliki akun?{" "}
          <Link
            href="/login"
            className="text-orange-500 hover:text-orange-700 transition-colors ease-in-out duration-300"
          >
            Login
          </Link>
        </div>
      </div>
    </main>
  );
};
