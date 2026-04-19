import { Suspense } from "react";
import RegisterForm from "@/src/components/AuthPage/RegisterForm";

const RegisterPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RegisterForm />
    </Suspense>
  );
};

export default RegisterPage;
