"use client";
import { useSession } from "next-auth/react";

const ClientSession = () => {
  const session = useSession();
  return (
    <div className="border border-red-500 p-5">
      <p>Client Session</p>
      <p>{JSON.stringify(session)}</p>
    </div>
  );
};

export default ClientSession;
