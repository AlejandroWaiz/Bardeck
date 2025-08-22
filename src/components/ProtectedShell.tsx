"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function ProtectedShell({ children }: { children: React.ReactNode }) {
  const { player, ready } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!ready) return;          // ← espera a que AuthProvider termine
    if (!player) router.replace("/");
  }, [ready, player, router]);

  if (!ready) return null;       // o un spinner
  if (!player) return null;
  return <>{children}</>;
}
