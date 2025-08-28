import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, GraduationCap, Video, MessageSquare } from "lucide-react";
import Link from "next/link";

export function Welcome() {
    const features = [
        {
            icon: GraduationCap,
            title: "Learn New Skills",
            description: "Explore courses in art, science, and more with interactive labs.",
            href: "/courses",
            cta: "Browse Courses"
        },
        {
            icon: Video,
            title: "Watch Live Streams",
            description: "Tune into live coding sessions, art creation, and music performances.",
            href: "/watch",
            cta: "Start Watching"
        },
        {
            icon: MessageSquare,
            title: "Connect & Chat",
            description: "Join discussions, share your thoughts, and connect with peers.",
            href: "/chat",
            cta: "Start Chatting"
        }
    ]
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center gap-3">
                    <Sparkles className="h-6 w-6 text-primary" />
                    <CardTitle className="text-2xl">Welcome to Social Spark!</CardTitle>
                </div>
                <CardDescription>
                    Your new platform for creativity, learning, and connection. Here are a few things you can do to get started:
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-3">
                {features.map((feature) => (
                    <Card key={feature.title} className="flex flex-col">
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <feature.icon className="h-5 w-5 text-muted-foreground" />
                                <CardTitle className="text-base">{feature.title}</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </CardContent>
                        <div className="p-6 pt-0">
                             <Button asChild variant="outline" size="sm" className="w-full">
                                <Link href={feature.href}>{feature.cta}</Link>
                            </Button>
                        </div>
                    </Card>
                ))}
            </CardContent>
        </Card>
    )
}
