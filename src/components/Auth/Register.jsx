"use client";

import { registerAtom } from "@/state/authAtom";
import { useAtom } from "jotai";
import Link from "next/link";

export const Register = () => {
  const [registerData, setRegisterData] = useAtom(registerAtom);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmitRegister = async () => {
    const res = await fetch("http://localhost:3000/api/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerData),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <main className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-5">
        <h1 className="text-2xl font-bold text-center">Register Toko Baru</h1>
        <input
          name="fullName"
          placeholder="Nama Lengkap"
          onChange={handleChange}
          className="py-2"
        />
        <input
          className="py-2"
          name="shopName"
          placeholder="Nama Toko"
          onChange={handleChange}
        />
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
