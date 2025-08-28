"use client"

import * as React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { mockChats, mockUsers, currentUser } from "@/lib/mock-data"
import type { Chat, ChatMessage, User } from "@/lib/types"
import { cn } from "@/lib/utils"
import { Search, Send } from "lucide-react"

export function ChatLayout() {
  const [selectedChat, setSelectedChat] = React.useState<Chat>(mockChats[0])
  
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  }

  return (
    <div className="grid h-full min-h-0 w-full grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      <Card className="col-span-1 flex flex-col rounded-r-none border-r">
        <CardHeader className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search chats..." className="pl-9" />
          </div>
        </CardHeader>
        <ScrollArea className="flex-1">
          <CardContent className="flex flex-col gap-1 p-4 pt-0">
            {mockChats.map((chat) => (
              <button
                key={chat.id}
                onClick={() => setSelectedChat(chat)}
                className={cn(
                    "flex w-full items-center gap-3 rounded-lg p-3 text-left transition-colors hover:bg-accent",
                    selectedChat.id === chat.id && "bg-accent"
                )}
              >
                <Avatar className="h-10 w-10">
                  <AvatarImage src={chat.contact.user.avatar} alt={chat.contact.user.name} />
                  <AvatarFallback>{getInitials(chat.contact.user.name)}</AvatarFallback>
                </Avatar>
                <div className="flex-1 truncate">
                  <p className="font-semibold">{chat.contact.user.name}</p>
                  <p className="text-sm text-muted-foreground truncate">{chat.contact.lastMessage}</p>
                </div>
                <div className="flex flex-col items-end text-xs">
                    <span className="text-muted-foreground">{chat.contact.lastMessageTime}</span>
                    {chat.contact.unreadCount > 0 && (
                        <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
                            {chat.contact.unreadCount}
                        </span>
                    )}
                </div>
              </button>
            ))}
          </CardContent>
        </ScrollArea>
      </Card>

      <div className="col-span-1 flex flex-col md:col-span-2 lg:col-span-3">
        {selectedChat ? (
          <div className="flex h-full min-h-0 flex-col">
            <div className="flex items-center gap-3 border-b p-4">
                <Avatar className="h-10 w-10">
                    <AvatarImage src={selectedChat.contact.user.avatar} alt={selectedChat.contact.user.name} />
                    <AvatarFallback>{getInitials(selectedChat.contact.user.name)}</AvatarFallback>
                </Avatar>
                <div>
                    <p className="font-semibold">{selectedChat.contact.user.name}</p>
                    <p className="text-sm text-muted-foreground">@{selectedChat.contact.user.username}</p>
                </div>
            </div>
            <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                    {selectedChat.messages.map((message) => {
                        const sender = mockUsers.find(u => u.id === message.senderId) || currentUser;
                        const isSent = message.senderId === currentUser.id;
                        return (
                            <div key={message.id} className={cn("flex items-end gap-3", isSent && "justify-end")}>
                                {!isSent && (
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src={sender.avatar} alt={sender.name} />
                                        <AvatarFallback>{getInitials(sender.name)}</AvatarFallback>
                                    </Avatar>
                                )}
                                <div className={cn("max-w-xs rounded-lg p-3 md:max-w-md", isSent ? "rounded-br-none bg-primary text-primary-foreground" : "rounded-bl-none bg-secondary")}>
                                    <p className="text-sm">{message.content}</p>
                                </div>
                                {isSent && (
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src={sender.avatar} alt={sender.name} />
                                        <AvatarFallback>{getInitials(sender.name)}</AvatarFallback>
                                    </Avatar>
                                )}
                            </div>
                        )
                    })}
                </div>
            </ScrollArea>
            <div className="border-t p-4">
                <div className="relative">
                    <Input placeholder="Type a message..." className="pr-12" />
                    <Button size="icon" className="absolute right-1 top-1/2 h-8 w-8 -translate-y-1/2">
                        <Send className="h-4 w-4" />
                    </Button>
                </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-1 items-center justify-center text-muted-foreground">
            <p>Select a chat to start messaging</p>
          </div>
        )}
      </div>
    </div>
  )
}
