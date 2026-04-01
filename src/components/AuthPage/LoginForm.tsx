"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import SocialLogin from "./SocialLogin";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation"; // রাউটিং এর জন্য

type LoginFormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const handleLogin = async (data: LoginFormValues) => {
    // ২. console.log দিয়ে চেক করুন ডেটা আসছে কিনা
    console.log("Login Attempt:", data.email);

    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    console.log(result);

    // ৩. রেজাল্ট চেক এবং ইউজার ফিডব্যাক
    if (result?.error) {
      // যদি ভুল পাসওয়ার্ড বা ইমেইল হয়, তবে NextAuth 'CredentialsSignin' এরর দেয়
      alert("Login Failed: Invalid email or password");
    } else if (result?.ok) {
      alert("Login Successful!");
      router.push("/"); // লগইন সফল হলে হোম পেজে পাঠান
      // router.refresh(); // সেশন আপডেট নিশ্চিত করতে
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 dark:text-white">
          Login
        </h2>

        <form
          onSubmit={handleSubmit(handleLogin)}
          className="space-y-4 dark:text-white"
        >
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message as string}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters",
                },
              })}
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message as string}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition font-semibold"
          >
            Login
          </button>
        </form>

        <div className="flex justify-center items-center w-full gap-5 mt-5">
          <hr className="border border-gray-300 dark:border-gray-600 grow" />
          <p className="dark:text-white text-sm">OR</p>
          <hr className="border border-gray-300 dark:border-gray-600 grow" />
        </div>

        <SocialLogin />

        <p className="text-sm text-center mt-4 dark:text-white">
          Don’t have an account?{" "}
          <Link href="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
