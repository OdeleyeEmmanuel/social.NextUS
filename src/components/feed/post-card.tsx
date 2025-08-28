import Image from "next/image"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import type { Post } from "@/lib/types"
import { Heart, MessageCircle, MoreHorizontal } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Input } from "../ui/input"
import { Separator } from "../ui/separator"

export function PostCard({ post }: { post: Post }) {
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4 p-4">
        <Avatar>
          <AvatarImage src={post.author.avatar} alt={post.author.name} />
          <AvatarFallback>{getInitials(post.author.name)}</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <p className="font-semibold">{post.author.name}</p>
          <p className="text-sm text-muted-foreground">@{post.author.username} · {post.timestamp}</p>
        </div>
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-5 w-5" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4 p-4 pt-0">
        <p className="leading-relaxed">{post.content}</p>
        {post.image && (
          <div className="overflow-hidden rounded-lg border">
            <Image
              src={post.image}
              alt="Post image"
              width={600}
              height={400}
              className="object-cover"
              data-ai-hint="social media post"
            />
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4 p-4">
        <div className="flex w-full items-center justify-between text-muted-foreground">
          <Button variant="ghost" size="sm" className="flex items-center gap-2">
            <Heart className="h-5 w-5" />
            <span>{post.likes}</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5" />
            <span>{post.comments.length}</span>
          </Button>
        </div>
        <Separator />
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b-0">
                <AccordionTrigger>
                    <span className="text-sm text-muted-foreground">View comments</span>
                </AccordionTrigger>
                <AccordionContent className="space-y-4">
                {post.comments.map((comment) => (
                    <div key={comment.id} className="flex items-start gap-3">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={comment.author.avatar} alt={comment.author.name} />
                            <AvatarFallback>{getInitials(comment.author.name)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 rounded-lg bg-secondary p-3 text-sm">
                            <span className="font-semibold">{comment.author.name}</span>
                            <p className="text-muted-foreground">{comment.content}</p>
                        </div>
                    </div>
                ))}
                <div className="flex items-center gap-3 pt-2">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src={post.author.avatar} alt={post.author.name} />
                        <AvatarFallback>{getInitials(post.author.name)}</AvatarFallback>
                    </Avatar>
                    <Input placeholder="Write a comment..." className="h-9" />
                </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
      </CardFooter>
    </Card>
  )
}
