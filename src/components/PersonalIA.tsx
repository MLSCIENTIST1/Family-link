"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const PersonalIA = () => {
  const [chatMessages, setChatMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setChatMessages([...chatMessages, newMessage]);
      setNewMessage("");
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      {/* Personal Chat - Takes full width */}
      <Card className="col-span-1">
        <CardHeader>
          <CardTitle>Chat Personal</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col h-[400px]">
          <ScrollArea className="flex-grow">
            <div className="space-y-2">
              {chatMessages.map((message, index) => (
                <div
                  key={index}
                  className="p-2 rounded-md bg-secondary text-secondary-foreground"
                >
                  {message}
                </div>
              ))}
            </div>
          </ScrollArea>
          <div className="mt-2 flex gap-2">
            <Textarea
              placeholder="Escribe tu mensaje aquí..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-grow"
            />
            <Button onClick={handleSendMessage}>Enviar</Button>
          </div>
        </CardContent>
      </Card>

      {/* Remaining features will be in a grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Goals and Reminders */}
        <Card>
          <CardHeader>
            <CardTitle>Metas y Recordatorios</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea placeholder="Escribe tus metas y recordatorios aquí..." />
            <Button className="mt-2">Guardar</Button>
          </CardContent>
        </Card>

        {/* Personalization Options */}
        <Card>
          <CardHeader>
            <CardTitle>Opciones de Personalización</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <p>Tema:</p>
              <select className="w-full">
                <option>Claro</option>
                <option>Oscuro</option>
              </select>
            </div>
            <div className="mt-2">
              <p>Color:</p>
              <input type="color" className="w-full" />
            </div>
            {/* Add more customization options here */}
          </CardContent>
        </Card>

        {/* Documents */}
        <Card>
          <CardHeader>
            <CardTitle>Documentos</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Add document management features here */}
            <p>Administra tus documentos personales aquí.</p>
            <Button>Subir Documento</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PersonalIA;
