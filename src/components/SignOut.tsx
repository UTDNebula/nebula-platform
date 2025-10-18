"use client";
import { authClient } from "@/auth-client";
import { useRouter } from "next/navigation";

export const SignOut = () => {
  const router = useRouter();
  return (
    <button
      className="btn"
      onClick={() => {
        authClient.signOut({
          fetchOptions: {
            onSuccess: () => {
              router.push("/");
            },
          },
        });
      }}
    >
      Sign Out
    </button>
  );
};
