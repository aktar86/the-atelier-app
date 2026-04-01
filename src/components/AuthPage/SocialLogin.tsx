import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const handleGoogleLogin = async () => {
    const result = await signIn("google", { callbackUrl });
    if (result?.ok) {
      router.push(callbackUrl || "/");
      Swal.fire({
        icon: "success",
        text: "Login Successfully",
        timer: 1500,
        showConfirmButton: false,
      });
    } else if (result?.error) {
      Swal.fire({
        icon: "error",
        text: "Login Failed",
        timer: 1500,
        showConfirmButton: false,
      });
    }
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
