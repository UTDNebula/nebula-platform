"use client";

import { authClient } from "@/auth-client";

export const GoogleButton = () => {
  return (
    <button
      className="btn"
      onClick={() => {
        authClient.signIn.social({
          provider: "google",
          callbackURL: "/dashboard",
        });
      }}
    >
      Login with Google
    </button>
  );
};
