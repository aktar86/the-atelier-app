import React from "react";
import Logo from "../components/UI/Logo";

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[calc(100vh-100px)]">
      <div className="animate-ping">
        <Logo></Logo>
      </div>
    </div>
  );
};

export default Loading;
