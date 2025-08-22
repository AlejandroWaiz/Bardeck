"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { Player } from "@/entitys/Player";

type AuthContextType = {
  player: Player | null;
  ready: boolean;                 // ← nuevo
  login: (name: string, password: string) => boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);
const STORAGE_KEY = "auth.player";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [player, setPlayer] = useState<Player | null>(null);
  const [ready, setReady]   = useState(false); // ← nuevo

  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
      if (raw) setPlayer(JSON.parse(raw));
    } finally {
      setReady(true); // ← marcamos listo después de leer
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (player) localStorage.setItem(STORAGE_KEY, JSON.stringify(player));
    else localStorage.removeItem(STORAGE_KEY);
  }, [player]);

  const login = (name: string, password: string) => {
    if (name === "Alejandro" && password === "1234") {
      setPlayer({ name: "Alejandro", janoDolares: 1000, password: "1234" } as Player);
      return true;
    }
    return false;
  };

  const logout = () => setPlayer(null);

  const value = useMemo(() => ({ player, ready, login, logout }), [player, ready]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
