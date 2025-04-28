"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";

const PersonalIA = () => {
  const [chatMessages, setChatMessages] = useState<
    { sender: "user" | "ia"; message: string }[]
  >([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setChatMessages([
        ...chatMessages,
        { sender: "user", message: newMessage },
      ]);
      // Simulate IA response (replace with actual IA logic)
      setTimeout(() => {
        setChatMessages([
          ...chatMessages,
          {
            sender: "user",
            message: newMessage,
          },
          {
            sender: "ia",
            message: `Respuesta de la IA al mensaje: ${newMessage}`,
          },
        ]);
      }, 500); // Simulate delay for IA processing
      setNewMessage("");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Chat Section */}
      <Card className="md:col-span-1">
        <CardHeader>
          <CardTitle>Chat Personal con IA</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col h-[500px]">
          <ScrollArea className="flex-grow">
            <div className="space-y-2">
              {chatMessages.map((message, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-md ${
                    message.sender === "user"
                      ? "bg-secondary text-secondary-foreground self-end"
                      : "bg-muted text-muted-foreground self-start"
                  }`}
                >
                  {message.message}
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

      {/* Goals and Reminders Section */}
      <Card className="md:col-span-1">
        <CardHeader>
          <CardTitle>Metas y Recordatorios</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea placeholder="Escribe tus metas y recordatorios aquí..." />
          <Button className="mt-2">Guardar</Button>
        </CardContent>
      </Card>

      {/* New Section: Quick Actions */}
      <Card className="md:col-span-1">
        <CardHeader>
          <CardTitle>Acciones Rápidas</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col space-y-2">
          <Button variant="outline">Crear Recordatorio</Button>
          <Button variant="outline">Planificar Evento</Button>
          <Button variant="outline">Establecer Meta</Button>
        </CardContent>
      </Card>

      {/* Documents Section */}
      <Card className="md:col-span-1">
        <CardHeader>
          <CardTitle>Documentos</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Administra tus documentos personales aquí.</p>
          <Button>Subir Documento</Button>
        </CardContent>
      </Card>

      {/* Personalization Options Section - Takes full width on small screens */}
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Opciones de Personalización</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p>Tema:</p>
            <select className="w-full">
              <option>Claro</option>
              <option>Oscuro</option>
            </select>
          </div>
          <div>
            <p>Color:</p>
            <Input type="color" className="w-full h-10" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PersonalIA;
