import { headers } from "next/headers";
import SignOutButton from "./components/sign-out-button";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/authentication");
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <h3>{session?.user?.name}</h3>
      <h3>{session?.user?.email}</h3>

      <SignOutButton />
    </div>
  );
};

export default Dashboard;
