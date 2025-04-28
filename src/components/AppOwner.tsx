"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AppOwner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Payment Visualization */}
      <Card>
        <CardHeader>
          <CardTitle>Visualización de Pagos</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Visualiza los pagos realizados por los usuarios.</p>
          {/* Add payment visualization components here */}
          <p>No hay pagos recientes para mostrar.</p>
        </CardContent>
      </Card>

      {/* Access Approval */}
      <Card>
        <CardHeader>
          <CardTitle>Aprobación de Acceso</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Aprueba o rechaza el acceso según los pagos.</p>
          {/* Add access approval components here */}
          <p>No hay solicitudes pendientes.</p>
        </CardContent>
      </Card>

      {/* Custom Price Configuration */}
      <Card>
        <CardHeader>
          <CardTitle>Configuración del Precio Mensual</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Configura el precio mensual.</p>
          <Input placeholder="Precio Mensual" type="number" />
          <Button className="mt-2">Guardar Precio</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AppOwner;
