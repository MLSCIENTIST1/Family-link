"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PersonalIA from "@/components/PersonalIA";
import FamilyIA from "@/components/FamilyIA";
import AdminPanel from "@/components/AdminPanel";
import AppOwner from "@/components/AppOwner";
import { Bell, CreditCard, User, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Page = () => {
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
        </div>
      </div>

      {/* Tab Navigation */}
      <Tabs defaultValue="personal" className="flex-1 flex flex-col">
        <TabsList className="m-4">
          <TabsTrigger value="personal">
            <User className="mr-2 h-4 w-4" />
            IA Personal
          </TabsTrigger>
          <TabsTrigger value="family">
            <Users className="mr-2 h-4 w-4" />
            IA Familiar
          </TabsTrigger>
          <TabsTrigger value="admin">
            <CreditCard className="mr-2 h-4 w-4" />
            Panel de Administrador
          </TabsTrigger>
          <TabsTrigger value="owner">
            <CreditCard className="mr-2 h-4 w-4" />
            Propietario de la App
          </TabsTrigger>
        </TabsList>
        <div className="flex-1 p-4">
          <TabsContent value="personal" className="outline-none">
            <PersonalIA />
          </TabsContent>
          <TabsContent value="family" className="outline-none">
            <FamilyIA />
          </TabsContent>
          <TabsContent value="admin" className="outline-none">
            <AdminPanel />
          </TabsContent>
            <TabsContent value="owner" className="outline-none">
              <AppOwner />
            </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default Page;
