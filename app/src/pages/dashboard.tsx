import { useUser } from "@/src/hooks/use-user";

export default function DashboardPage() {
  const user = useUser();

  return (
    <div>
      <h1 className="text-2xl font-bold">Welcome back, {user.name}</h1>
      <p className="text-sm text-muted-foreground">{user.email}</p>
    </div>
  );
}
