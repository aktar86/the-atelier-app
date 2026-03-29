import Image from "next/image";
import React from "react";

const SocialLogin = () => {
  const handleGoogleLogin = () => {
    console.log("Google login clicked");
    // later: signIn("google") if using next-auth
  };
  return (
    <>
      {/* Google Button */}
      <button
        onClick={handleGoogleLogin}
        className="w-full flex items-center justify-center gap-2 border border-secondary dark:text-white hover:text-white py-2 rounded-lg mb-4 hover:bg-primary transition mt-5"
      >
        <Image
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="google"
          width={24}
          height={24}
        ></Image>
        Continue with Google
      </button>
    </>
  );
};

export default SocialLogin;
