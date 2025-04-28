"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const videoData = [
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
  {
    id: 7,
    title: 'Building a Snowman',
    thumbnail: 'https://picsum.photos/300/206',
    date: '2020-02-15',
  },
  {
    id: 8,
    title: 'Trip to the Zoo',
    thumbnail: 'https://picsum.photos/300/207',
    date: '2019-09-05',
  },
  {
    id: 9,
    title: 'Easter Egg Hunt',
    thumbnail: 'https://picsum.photos/300/208',
    date: '2019-04-21',
  },
  {
    id: 10,
    title: 'Thanksgiving Dinner',
    thumbnail: 'https://picsum.photos/300/209',
    date: '2018-11-22',
  },
];

const FamilyVideosPremium = () => {
  return (
    <div className="p-4">
      <Card>
        <CardHeader>
          <CardTitle>Explora los Videos Familiares</CardTitle>
          <p className="text-sm text-muted-foreground">
            Revive momentos inolvidables con nuestra colección premium de videos familiares.
          </p>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[500px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {videoData.map((video) => (
                <div key={video.id} className="flex flex-col rounded-lg shadow-md overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{video.title}</h3>
                    <p className="text-sm text-gray-500">Fecha: {video.date}</p>
                    <Button className="mt-2">Ver Video</Button>
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

export default FamilyVideosPremium;
