import type { ReactNode } from "react";
import { Outlet } from "react-router";
import "@/src/index.css";
import reactLogo from "@/src/assets/react.svg";
import { Link } from "react-router";

type GuestLayoutProps = {
  children?: ReactNode;
};

export default function GuestLayout({ children }: GuestLayoutProps) {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link to="/" className="flex items-center gap-2 font-medium">
            <img src={reactLogo} alt="Image" className="size-8" />
            Productivity App
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">{children ?? <Outlet />}</div>
        </div>
      </div>
      <div className="hidden items-center justify-center bg-muted lg:flex">
        <img
          src={reactLogo}
          alt="Image"
          className="h-1/2 w-1/2 object-contain"
        />
      </div>
    </div>
  );
}
