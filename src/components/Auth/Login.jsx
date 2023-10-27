"use client";

import { loginAtom } from "@/state/authAtom";
import { useAtom } from "jotai";
import Link from "next/link";

export const Login = () => {
  const [loginData, setLoginData] = useAtom(loginAtom);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmitLogin = async () => {
    const res = await fetch("http://localhost:3000/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    if (res.status === 201) {
      window.location.href = "/login";
    } else {
      toast.error("Login failed.", {});
    }
  };

  return (
    <main className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-4">
        <h1 className="text-2xl font-bold text-center">
          Login ke TinggalPesan
        </h1>
        <input
          name="phoneNumber"
          placeholder="Nomor Handphone"
          onChange={handleChange}
          className="py-2"
        />
        <input
          name="password"
          placeholder="Password"
          type="password"
          onChange={handleChange}
          className="py-2"
        />
        <button
          className="hover:bg-orange-600 transition-colors ease-in-out duration-300"
          onClick={handleSubmitLogin}
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
