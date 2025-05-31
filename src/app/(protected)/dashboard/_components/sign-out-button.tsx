"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const SignOutButton = () => {
  return (
    <Button
      onClick={() => {
        authClient.signOut({
          fetchOptions: {
            onSuccess: () => {
              redirect("/authentication");
            },
          },
        });
      }}
      className="mt-4"
    >
      Sair
    </Button>
  );
};

export default SignOutButton;
