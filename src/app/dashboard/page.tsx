import { headers } from "next/headers";
import SignOutButton from "./components/sign-out-button";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { db } from "@/db";
import { eq } from "drizzle-orm";
import { usersToClinicsTable } from "@/db/schema";

const Dashboard = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/authentication");
  }

  // Preciso pegar as clinicas do usuario
  const clinics = await db.query.usersToClinicsTable.findMany({
    where: eq(usersToClinicsTable.userId, session.user.id),
  });

  if (clinics.length === 0) {
    redirect("/clinic-form");
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <h3>{session?.user?.name}</h3>
      <h3>{session?.user?.email}</h3>
      <h3>{session?.user?.id}</h3>
      <h3>{session?.user?.image}</h3>
      <img src={session?.user?.image || ''} width={100} height={100} />

      <SignOutButton />
    </div>
  );
};

export default Dashboard;
