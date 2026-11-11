import { useUser } from "@/src/hooks/use-user";

export default function ProjectIndexPage() {
  const user = useUser();

  return (
    <div>
      <p>Projects</p>
    </div>
  );
}
