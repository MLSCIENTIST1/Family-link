"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const AdminPanel = () => {
  const [paymentStatus, setPaymentStatus] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Membership Management */}
      <Card>
        <CardHeader>
          <CardTitle>Gestión de Membresías</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Administra las membresías, roles y permisos de los usuarios.</p>
          <Button>Gestionar Membresías</Button>
        </CardContent>
      </Card>

      {/* Payment Configuration */}
      <Card>
        <CardHeader>
          <CardTitle>Configuración de Pago</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Configura el pago mensual a través de Nequi.</p>
          <Input placeholder="URL de la captura de pantalla del pago" />
          <Button className="mt-2">Aprobar Acceso</Button>
        </CardContent>
      </Card>

      {/* Usage Status Indicator */}
      <Card>
        <CardHeader>
          <CardTitle>Estado de Uso</CardTitle>
        </CardHeader>
        <CardContent>
          <Badge variant={paymentStatus ? "success" : "destructive"}>
            {paymentStatus ? "Habilitado" : "Deshabilitado"}
          </Badge>
        </CardContent>
      </Card>

      {/* Statistics and History */}
      <Card>
        <CardHeader>
          <CardTitle>Estadísticas e Historial</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Accede a estadísticas avanzadas e historial de pagos y actividad familiar.</p>
          <Button>Ver Estadísticas</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminPanel;
