"use client";

import Image from "next/image";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { mockStreams, streamChat, currentUser } from "@/lib/mock-data";
import type { Stream } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Send, User, Bell, Star } from "lucide-react";
import React from "react";

export function WatchLayout() {
  const [activeStream] = React.useState<Stream>(mockStreams[0]);

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("");
  };

  return (
    <div className="grid h-full min-h-0 w-full grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      <div className="col-span-1 flex flex-col md:col-span-2 lg:col-span-3">
        <div className="flex h-full min-h-0 flex-col">
          <div className="relative aspect-video w-full overflow-hidden bg-secondary">
            <Image
              src={activeStream.thumbnailUrl}
              alt={activeStream.title}
              layout="fill"
              objectFit="cover"
              data-ai-hint="live stream video"
            />
            <div className="absolute left-4 top-4">
                <Badge variant="destructive">LIVE</Badge>
            </div>
          </div>
          <div className="p-4">
            <h1 className="text-2xl font-bold">{activeStream.title}</h1>
            <div className="mt-2 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage
                    src={activeStream.author.avatar}
                    alt={activeStream.author.name}
                  />
                  <AvatarFallback>
                    {getInitials(activeStream.author.name)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{activeStream.author.name}</p>
                  <p className="text-sm text-muted-foreground">
                    @{activeStream.author.username}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button>
                  <Star className="mr-2 h-4 w-4" /> Subscribe
                </Button>
                <Button variant="outline">
                  <Bell className="mr-2 h-4 w-4" /> Notify Me
                </Button>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">{activeStream.viewers.toLocaleString()} viewers</span>
            </div>
            <p className="mt-4 text-muted-foreground">{activeStream.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
                {activeStream.tags.map(tag => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Card className="col-span-1 flex flex-col rounded-l-none border-l">
        <div className="border-b p-4 text-center font-semibold">
          Stream Chat
        </div>
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {streamChat.map((message) => {
              const sender =
                mockStreams.map(s => s.author).find((u) => u.id === message.senderId) ||
                currentUser;
              const isSent = message.senderId === currentUser.id;
              return (
                <div
                  key={message.id}
                  className={cn("flex items-start gap-3", isSent && "justify-end")}
                >
                  {!isSent && (
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={sender.avatar} alt={sender.name} />
                      <AvatarFallback>{getInitials(sender.name)}</AvatarFallback>
                    </Avatar>
                  )}
                  <div className="flex-1">
                    {!isSent && <p className="text-xs font-semibold">{sender.name}</p>}
                    <div
                      className={cn(
                        "max-w-xs rounded-lg p-2 text-sm",
                        isSent
                          ? "rounded-br-none bg-primary text-primary-foreground"
                          : "rounded-tl-none bg-secondary"
                      )}
                    >
                      <p>{message.content}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
        <div className="border-t p-4">
          <div className="relative">
            <Input placeholder="Say something..." className="pr-12" />
            <Button
              size="icon"
              className="absolute right-1 top-1/2 h-8 w-8 -translate-y-1/2"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
