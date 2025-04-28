"use client";

import React, { useState, useCallback, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { toast } from "@/hooks/use-toast";
import {
  PersonalAIChatInput,
  PersonalAIChatOutput,
  personalAIChat,
} from "@/ai/flows/personal-ia-chat";

interface ChatMessage {
  sender: "user" | "ia";
  message: string;
}

const ChatHistory = ({ messages }: { messages: ChatMessage[] }) => (
  <ScrollArea className="flex-grow">
    <div className="space-y-2">
      {messages.map((message, index) => (
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
);

const ChatInput = ({
  onSendMessage,
}: {
  onSendMessage: (message: string) => void;
}) => {
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = useCallback(() => {
    if (newMessage.trim() !== "") {
      onSendMessage(newMessage);
      setNewMessage("");
    }
  }, [newMessage, onSendMessage]);

  return (
    <div className="mt-2 flex gap-2">
      <Textarea
        placeholder="Escribe tu mensaje aquí..."
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        className="flex-grow"
      />
      <Button onClick={handleSendMessage}>Enviar</Button>
    </div>
  );
};

const GoalAndReminders = () => (
  <Card className="md:col-span-1">
    <CardHeader>
      <CardTitle>Metas y Recordatorios</CardTitle>
    </CardHeader>
    <CardContent>
      <Textarea placeholder="Escribe tus metas y recordatorios aquí..." />
      <Button className="mt-2">Guardar</Button>
    </CardContent>
  </Card>
);

const QuickActions = () => (
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
);

const DocumentsSection = () => (
  <Card className="md:col-span-1">
    <CardHeader>
      <CardTitle>Documentos</CardTitle>
    </CardHeader>
    <CardContent>
      <p>Administra tus documentos personales aquí.</p>
      <Button>Subir Documento</Button>
    </CardContent>
  </Card>
);

const PersonalizationOptions = () => (
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
);

const PersonalIA = () => {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const getCameraPermission = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({video: true});
        setHasCameraPermission(true);

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
        setHasCameraPermission(false);
        toast({
          variant: 'destructive',
          title: 'Camera Access Denied',
          description: 'Please enable camera permissions in your browser settings to use this app.',
        });
      }
    };

    getCameraPermission();
  }, []);

  const sendMessageToIA = useCallback(
    async (message: string) => {
      setIsLoading(true);
      setChatMessages((prev) => [...prev, { sender: "user", message }]);

      try {
        const input: PersonalAIChatInput = {
          message,
          chatHistory: chatMessages
            .map((m) => `${m.sender}: ${m.message}`)
            .join("\n"),
        };

        const iaResponse: PersonalAIChatOutput = await personalAIChat(input);

        setChatMessages((prev) => [
          ...prev,
          { sender: "ia", message: iaResponse.response },
        ]);
      } catch (error: any) {
        console.error("IA Error:", error);
        toast({
          variant: "destructive",
          title: "IA Error",
          description: error.message || "Failed to get response from IA",
        });
        setChatMessages((prev) => [
          ...prev,
          {
            sender: "ia",
            message: "Error: Could not generate response.",
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    },
    [chatMessages]
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Chat Section */}
      <Card className="md:col-span-1">
        <CardHeader>
          <CardTitle>Chat Personal con IA</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col h-[500px]">
            <video ref={videoRef} className="w-full aspect-video rounded-md" autoPlay muted />

            { !(hasCameraPermission) && (
                <Alert variant="destructive">
                          <AlertTitle>Camera Access Required</AlertTitle>
                          <AlertDescription>
                            Please allow camera access to use this feature.
                          </AlertDescription>
                  </Alert>
            )
            }

          <ChatHistory messages={chatMessages} />
          <ChatInput onSendMessage={sendMessageToIA} />
          {isLoading && <div>Cargando respuesta de la IA...</div>}
        </CardContent>
      </Card>

      {/* Goals and Reminders Section */}
      <GoalAndReminders />

      {/* New Section: Quick Actions */}
      <QuickActions />

      {/* Documents Section */}
      <DocumentsSection />

      {/* Personalization Options Section - Takes full width on small screens */}
      <PersonalizationOptions />
    </div>
  );
};

export default PersonalIA;
