// src/context/AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";
import { Player } from "../entitys/Player";

interface AuthContextType {
  player: Player | null;
  login: (name: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [player, setPlayer] = useState<Player | null>(null);

  const login = (name: string, password: string): boolean => {
    if (name === "Alejandro" && password === "1234") {
      setPlayer({ name: "Alejandro", janoDolares: 1000, password: "1234" });
      return true;
    }
    return false;
  };

  const logout = () => setPlayer(null);

  return (
    <AuthContext.Provider value={{ player, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
