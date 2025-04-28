"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface LoginProps {
  onSuccess: () => void;
}

export const Login: React.FC<LoginProps> = ({ onSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Basic validation
    if (!email || !password) {
      setError("Por favor, complete todos los campos.");
      return;
    }

    // Simulate authentication request (replace with actual Firebase auth)
    try {
      // Simulate a successful login by creating a token
      localStorage.setItem("token", "fake_token"); // Store the token in local storage
      onSuccess(); // Notify the parent component about the successful login
    } catch (err: any) {
      setError("Credenciales inválidas.");
    }
  };

  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle>Iniciar Sesión</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Correo Electrónico</Label>
          <Input
            id="email"
            type="email"
            placeholder="correo@ejemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Contraseña</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <Button onClick={handleSubmit}>
          Iniciar Sesión
        </Button>
      </CardContent>
    </Card>
  );
};
