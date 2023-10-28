"use client";
import { loginAtom } from "@/state/authAtom";
import { toast } from "react-toastify";
import { sellerIdAtom } from "@/state/sellerIdAtom";
import { useAtom } from "jotai";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const LoginForm = () => {
  const [loginData, setLoginData] = useAtom(loginAtom);
  const [sellerId, setSellerIdAtom] = useAtom(sellerIdAtom);

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    if (sellerId) {
      localStorage.setItem("sellerId", sellerId);
    }
  }, [sellerId]);

  const handleSubmitLogin = async () => {
    const res = await fetch("http://localhost:3000/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    const { data } = await res.json();
    if (res.status === 200) {
      setSellerIdAtom(data.id);
      router.push(`/dashboard/${data.id}`);
    } else {
      toast.error("Login failed.", {});
    }
  };

  return (
    <div className="max-w-md w-full space-y-4">
      <h1 className="text-2xl font-bold text-center">Login ke TinggalPesan</h1>
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
  );
};
