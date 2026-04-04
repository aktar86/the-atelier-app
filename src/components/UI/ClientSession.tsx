"use client";

import { useSession } from "next-auth/react";

const ClientSession = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="border border-yellow-500 p-5">
        <p>Loading session...</p>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="border border-red-500 p-5">
        <p>No user logged in</p>
      </div>
    );
  }

  return (
    <div className="border border-green-500 p-5">
      <p>Client Session</p>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
};

export default ClientSession;
