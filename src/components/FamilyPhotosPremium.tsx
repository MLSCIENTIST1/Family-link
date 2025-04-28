"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ImageIcon } from "lucide-react";

const photoData = [
  {
    id: 1,
    title: 'Family Trip to Disney World',
    thumbnail: 'https://picsum.photos/300/200',
    date: '2024-01-15',
  },
  {
    id: 2,
    title: 'Summer Vacation in Hawaii',
    thumbnail: 'https://picsum.photos/300/201',
    date: '2023-07-20',
  },
  {
    id: 3,
    title: 'Christmas Celebration',
    thumbnail: 'https://picsum.photos/300/202',
    date: '2022-12-25',
  },
  {
    id: 4,
    title: 'Grandma\'s 80th Birthday',
    thumbnail: 'https://picsum.photos/300/203',
    date: '2022-05-01',
  },
  {
    id: 5,
    title: 'First Day of School',
    thumbnail: 'https://picsum.photos/300/204',
    date: '2021-08-30',
  },
  {
    id: 6,
    title: 'Family Camping Adventure',
    thumbnail: 'https://picsum.photos/300/205',
    date: '2021-06-10',
  },
];

const FamilyPhotosPremium = () => {
  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>Explora las Fotos Familiares</CardTitle>
          <p className="text-sm text-muted-foreground">
            Revive momentos inolvidables con nuestra colección premium de fotos familiares.
          </p>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {photoData.map((photo) => (
                <div key={photo.id} className="flex flex-col rounded-lg shadow-md overflow-hidden">
                  <img
                    src={photo.thumbnail}
                    alt={photo.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{photo.title}</h3>
                    <p className="text-sm text-gray-500">Fecha: {photo.date}</p>
                    <Button className="mt-2">
                      <ImageIcon className="mr-2 h-4 w-4" />
                      Ver Foto
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default FamilyPhotosPremium;
