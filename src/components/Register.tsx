"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface RegisterProps {
  onSuccess: () => void;
}

export const Register: React.FC<RegisterProps> = ({ onSuccess }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Basic validation
    if (!name || !email || !password) {
      setError("Por favor, complete todos los campos.");
      return;
    }

    // Simulate register request (replace with actual Firebase auth)
    try {
      // Simulate a successful register by creating a token
      localStorage.setItem("token", "fake_token"); // Store the token in local storage
      onSuccess(); // Notify the parent component about the successful register
    } catch (err: any) {
      setError("Error al registrarse. Por favor, inténtelo de nuevo.");
    }
  };

  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle>Registrarse</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Nombre</Label>
          <Input
            id="name"
            type="text"
            placeholder="Nombre Completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
          Registrarse
        </Button>
      </CardContent>
    </Card>
  );
};
