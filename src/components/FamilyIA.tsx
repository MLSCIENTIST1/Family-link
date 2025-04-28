"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ImageIcon, VideoIcon } from "lucide-react";

const FamilyIA = () => {
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
      {/* Family Chat - Takes full width */}
      <Card className="col-span-1">
        <CardHeader>
          <CardTitle>Chat Familiar</CardTitle>
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
          <p className="mt-4">Resumen de discusiones clave:</p>
          <Textarea
            readOnly
            value="Resumen generado por IA..."
            className="mt-2"
          />
        </CardContent>
      </Card>

      {/* Remaining features will be in a grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Project Management */}
        <Card>
          <CardHeader>
            <CardTitle>Gestión de Proyectos Familiares</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Administra los proyectos familiares y las contribuciones de dinero
              aquí.
            </p>
            <Button>Crear Proyecto</Button>
          </CardContent>
        </Card>

        {/* Interactive Gallery */}
        <Card>
          <CardHeader>
            <CardTitle>Galería Interactiva</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Explora la galería interactiva con álbumes automáticos y
              presentaciones.
            </p>
            <Button>
              <ImageIcon className="mr-2 h-4 w-4" />
              Ver Galería de Fotos
            </Button>
          </CardContent>
        </Card>

        {/* Family Calendar */}
        <Card>
          <CardHeader>
            <CardTitle>Calendario Familiar</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar />
          </CardContent>
        </Card>

        {/* Family Videos */}
        <Card>
          <CardHeader>
            <CardTitle>Videos Familiares</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Explora los videos familiares.</p>
            <Button>
              <VideoIcon className="mr-2 h-4 w-4" />
              Ver Videos Familiares
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FamilyIA;
