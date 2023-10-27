"use client";

import Link from "next/link";
import { useState } from "react";

export const Login = () => {
  const [loginData, setLoginData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmitlogin = () => {
    console.log(loginData);
  };

  return (
    <main className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-4">
        <h1 className="text-2xl font-bold text-center">
          Login ke TinggalPesan
        </h1>
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
          onClick={handleSubmitlogin}
        >
          Login
        </button>
        <div>
          Belum memiliki akun?{" "}
          <Link
            href="/register"
            className="text-orange-500 hover:text-orange-700 transition-colors ease-in-out duration-300"
          >
            Register dulu
          </Link>
        </div>
      </div>
    </main>
  );
};
