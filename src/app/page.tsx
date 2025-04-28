"use client";

import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PersonalIA from "@/components/PersonalIA";
import FamilyIA from "@/components/FamilyIA";
import AdminPanel from "@/components/AdminPanel";
import { Bell, CreditCard, User, Users, Camera, Image } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Login } from "@/components/Login";
import { Register } from "@/components/Register";
import FamilyVideosPremium from "@/components/FamilyVideosPremium";

const Page = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // Simulate authentication check (replace with actual Firebase auth)
    const token = localStorage.getItem("token"); // Example: Check for token in local storage
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const handleStartClick = () => {
    setShowWelcome(false);
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleRegisterSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <Tabs defaultValue="login" className="w-full max-w-md">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Iniciar Sesión</TabsTrigger>
            <TabsTrigger value="register">Registrarse</TabsTrigger>
          </TabsList>
          <TabsContent value="login" className="mt-2">
            <Login onSuccess={handleLoginSuccess} />
          </TabsContent>
          <TabsContent value="register" className="mt-2">
            <Register onSuccess={handleRegisterSuccess} />
          </TabsContent>
        </Tabs>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen">
      {/* Top Navigation Bar */}
      <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between font-montserrat">
        <span className="text-xl font-bold">FamilyLink</span>
        <div className="flex items-center space-x-4">
          <Bell className="h-6 w-6 cursor-pointer" />
          <Avatar className="">
            <AvatarImage src="https://picsum.photos/50/50" alt="Avatar" />
            <AvatarFallback>FL</AvatarFallback>
          </Avatar>
          <Button variant="destructive" size="sm" onClick={handleLogout}>
            Cerrar Sesión
          </Button>
        </div>
      </div>

      {/* Welcome Screen or Tab Navigation */}
      {showWelcome ? (
        <div className="flex flex-col items-center justify-center flex-1">
          <h1 className="text-4xl font-bold font-montserrat mb-4">
            Bienvenido a FamilyLink
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Conéctate y organiza tu vida familiar de manera eficiente.
          </p>
          <Button onClick={handleStartClick}>Comenzar</Button>
        </div>
      ) : (
        <Tabs defaultValue="personalIA" className="flex-1 flex flex-col">
          <TabsList className="flex justify-center space-x-4 p-4">
            <TabsTrigger value="personalIA">IA Personal</TabsTrigger>
            <TabsTrigger value="familyIA">IA Familiar</TabsTrigger>
            <TabsTrigger value="adminPanel">Panel de Administrador</TabsTrigger>
            <TabsTrigger value="familyVideos">Videos Familiares</TabsTrigger>
            <TabsTrigger value="familyPhotos">Fotos Familiares</TabsTrigger>
          </TabsList>
          <div className="flex-1 p-4">
            <TabsContent value="personalIA" className="outline-none">
              <PersonalIA />
            </TabsContent>
            <TabsContent value="familyIA" className="outline-none">
              <FamilyIA />
            </TabsContent>
            <TabsContent value="adminPanel" className="outline-none">
              <AdminPanel />
            </TabsContent>
            <TabsContent value="familyVideos" className="outline-none">
              <FamilyVideosPremium/>
            </TabsContent>
            <TabsContent value="familyPhotos" className="outline-none">
              <h2>Fotos Familiares</h2>
              <p>
                Explora la galería interactiva con álbumes automáticos y
                presentaciones.
              </p>
            </TabsContent>
          </div>
          {/* App Owner Button */}
        </Tabs>
      )}
    </div>
  );
};

export default Page;
