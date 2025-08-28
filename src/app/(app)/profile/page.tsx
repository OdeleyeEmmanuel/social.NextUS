import Image from "next/image"
import { Header } from "@/components/header"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { currentUser } from "@/lib/mock-data"
import { User as UserIcon, Mail } from "lucide-react"

export default function ProfilePage() {
    const getInitials = (name: string) => {
        return name.split(' ').map(n => n[0]).join('');
    }

  return (
    <div className="flex h-full min-h-0 flex-col">
      <Header title="Profile" Icon={UserIcon} />
      <main className="flex-1 overflow-auto p-4 md:p-6">
        <div className="mx-auto max-w-4xl space-y-8">
          <Card className="overflow-hidden">
            <div className="h-32 bg-accent md:h-40" data-ai-hint="header background"></div>
            <CardContent className="p-4 sm:p-6">
              <div className="relative flex flex-col items-center gap-4 text-center sm:-mt-20 sm:flex-row sm:text-left">
                <Avatar className="h-24 w-24 border-4 border-background sm:h-32 sm:w-32">
                  <AvatarImage src={currentUser.avatar} />
                  <AvatarFallback>{getInitials(currentUser.name)}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <h1 className="text-2xl font-bold">{currentUser.name}</h1>
                  <p className="text-muted-foreground">@{currentUser.username}</p>
                   <p className="text-sm text-muted-foreground">{currentUser.email}</p>
                  <p className="max-w-prose text-sm text-muted-foreground">{currentUser.bio}</p>
                </div>
                <div className="flex gap-2">
                    <Button><UserIcon className="mr-2 h-4 w-4" /> Follow</Button>
                    <Button variant="outline"><Mail className="mr-2 h-4 w-4" /> Message</Button>
                </div>
              </div>
              <div className="mt-6 flex justify-center gap-8 text-center sm:justify-end">
                <div>
                  <p className="text-xl font-bold">{currentUser.stats.posts}</p>
                  <p className="text-sm text-muted-foreground">Posts</p>
                </div>
                <div>
                  <p className="text-xl font-bold">{currentUser.stats.followers.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">Followers</p>
                </div>
                <div>
                  <p className="text-xl font-bold">{currentUser.stats.following.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">Following</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="posts" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="posts">Posts</TabsTrigger>
              <TabsTrigger value="media">Media</TabsTrigger>
              <TabsTrigger value="likes">Likes</TabsTrigger>
            </TabsList>
            <TabsContent value="posts">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {[...Array(6)].map((_, i) => (
                    <Card key={i} className="overflow-hidden">
                        <Image
                            src={`https://placehold.co/400x400.png?i=${i}`}
                            alt={`User post ${i+1}`}
                            width={400}
                            height={400}
                            className="aspect-square object-cover transition-transform hover:scale-105"
                            data-ai-hint="user content"
                        />
                    </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
