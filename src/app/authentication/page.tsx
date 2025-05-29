"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignUpForm from "./components/sign-up-form";
import LoginForm from "./components/login+form";
const AuthenticationPage = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Criar conta</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <LoginForm />
        </TabsContent>
        <TabsContent value="register">
          <SignUpForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AuthenticationPage;
