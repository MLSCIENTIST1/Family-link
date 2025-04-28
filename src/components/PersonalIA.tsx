"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const PersonalIA = () => {
  return (
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

      {/* Personal Chat */}
      <Card>
        <CardHeader>
          <CardTitle>Chat Personal</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea placeholder="Escribe tu mensaje aquí..." />
          <Button className="mt-2">Enviar</Button>
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
  );
};

export default PersonalIA;
