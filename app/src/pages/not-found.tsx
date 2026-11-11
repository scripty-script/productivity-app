import { Link, useNavigate } from "react-router";
import { ArrowLeft, Home } from "lucide-react";
import { Button, buttonVariants } from "@/src/components/ui/button";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 text-center">
      <p className="text-7xl font-bold tracking-tight text-muted-foreground/40">
        404
      </p>
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Page not found</h1>
        <p className="max-w-sm text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" onClick={() => navigate(-1)}>
          <ArrowLeft data-icon="inline-start" />
          Go back
        </Button>
        <Link to="/" className={buttonVariants()}>
          <Home data-icon="inline-start" />
          Home
        </Link>
      </div>
    </main>
  );
}
