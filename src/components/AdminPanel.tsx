"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";

const AdminPanel = () => {
  const [paymentStatus, setPaymentStatus] = useState(false);
  const [transparency, setTransparency] = useState(50);
  const [theme, setTheme] = useState("light"); // Default theme
  const [monthlyPrice, setMonthlyPrice] = useState("");

  const handleTransparencyChange = (value: number[]) => {
    setTransparency(value[0]);
  };

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    // Apply theme logic here (e.g., update CSS variables)
  };

  const handleSavePrice = () => {
    // Logic to save the monthly price (e.g., to a database)
    alert(`Precio mensual guardado: ${monthlyPrice}`);
  };

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

      {/* App Customization Options */}
      <Card>
        <CardHeader>
          <CardTitle>Personalización de la App</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {/* Theme Selection */}
          <div>
            <p>Tema:</p>
            <select
              className="w-full"
              value={theme}
              onChange={(e) => handleThemeChange(e.target.value)}
            >
              <option value="light">Claro</option>
              <option value="dark">Oscuro</option>
              <option value="modern">Moderno</option>
              <option value="pastel">Pastel</option>
              <option value="retro">Retro</option>
              <option value="custom">Personalizado</option>
            </select>
          </div>

          {/* Transparency Control */}
          <div>
            <p>Transparencia ({transparency}%):</p>
            <Slider
              defaultValue={[transparency]}
              max={100}
              step={1}
              onValueChange={handleTransparencyChange}
            />
          </div>

          {/* Option 3: Enable Dark Mode */}
          <div>
            <label
              htmlFor="darkMode"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Modo Oscuro:
            </label>
            <Switch id="darkMode" />
          </div>

          {/* Option 4: Enable Notifications */}
          <div>
            <label
              htmlFor="notifications"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Notificaciones:
            </label>
            <Switch id="notifications" />
          </div>

          {/* Option 5: Enable Sounds */}
          <div>
            <label
              htmlFor="sounds"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Sonidos:
            </label>
            <Switch id="sounds" />
          </div>

          {/* Option 6: Enable Animations */}
          <div>
            <label
              htmlFor="animations"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Animaciones:
            </label>
            <Switch id="animations" />
          </div>

          {/* Option 7: Enable Blur Effect */}
          <div>
            <label
              htmlFor="blurEffect"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Efecto de Desenfoque:
            </label>
            <Switch id="blurEffect" />
          </div>

          {/* Option 8: Enable Rounded Corners */}
          <div>
            <label
              htmlFor="roundedCorners"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Esquinas Redondeadas:
            </label>
            <Switch id="roundedCorners" />
          </div>

          {/* Option 9: Enable Shadow Effect */}
          <div>
            <label
              htmlFor="shadowEffect"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Efecto de Sombra:
            </label>
            <Switch id="shadowEffect" />
          </div>

          {/* Option 10: Enable Gradient Background */}
          <div>
            <label
              htmlFor="gradientBackground"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Fondo de Degradado:
            </label>
            <Switch id="gradientBackground" />
          </div>

          {/* Option 11: Text Size */}
          <div>
            <p>Tamaño de texto:</p>
            <select className="w-full">
              <option>Pequeño</option>
              <option>Mediano</option>
              <option>Grande</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Statistics and History */}
      <Card>
        <CardHeader>
          <CardTitle>Estadísticas e Historial</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Accede a estadísticas avanzadas e historial de pagos y actividad
            familiar.
          </p>
          <Button>Ver Estadísticas</Button>
        </CardContent>
      </Card>

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
          <Input
            placeholder="Precio Mensual"
            type="number"
            value={monthlyPrice}
            onChange={(e) => setMonthlyPrice(e.target.value)}
          />
          <Button className="mt-2" onClick={handleSavePrice}>
            Guardar Precio
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminPanel;
