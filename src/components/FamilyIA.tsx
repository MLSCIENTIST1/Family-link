"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

const FamilyIA = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Family Chat */}
      <Card>
        <CardHeader>
          <CardTitle>Chat Familiar</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea placeholder="Escribe tu mensaje aquí..." />
          <Button className="mt-2">Enviar</Button>
          <p className="mt-4">Resumen de discusiones clave:</p>
          <Textarea
            readOnly
            value="Resumen generado por IA..."
            className="mt-2"
          />
        </CardContent>
      </Card>

      {/* Project Management */}
      <Card>
        <CardHeader>
          <CardTitle>Gestión de Proyectos Familiares</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Administra los proyectos familiares y las contribuciones de dinero aquí.</p>
          <Button>Crear Proyecto</Button>
        </CardContent>
      </Card>

      {/* Interactive Gallery */}
      <Card>
        <CardHeader>
          <CardTitle>Galería Interactiva</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Explora la galería interactiva con álbumes automáticos y presentaciones.</p>
          <Button>Ver Galería</Button>
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
    </div>
  );
};

export default FamilyIA;
