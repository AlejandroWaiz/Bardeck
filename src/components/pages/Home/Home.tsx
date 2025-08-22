"use client";
import { useAuth } from "@/context/AuthContext";
import React from "react";


export default function HomePage() {

    const { player, logout } = useAuth();


  return (
    <>
      <div>Bienvenido a bardeck {player?.name}</div>
    </>
  );
}
