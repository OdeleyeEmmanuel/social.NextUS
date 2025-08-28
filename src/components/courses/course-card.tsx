import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Course } from "@/lib/types";
import { Star, User, ArrowRight } from "lucide-react";

export function CourseCard({ course }: { course: Course }) {
  return (
    <Card className="flex flex-col overflow-hidden">
        <CardHeader className="p-0">
            <div className="relative aspect-video">
                <Image
                    src={course.imageUrl}
                    alt={course.title}
                    fill
                    className="object-cover"
                    data-ai-hint="course thumbnail"
                />
            </div>
        </CardHeader>
        <CardContent className="flex-1 p-4">
            <CardTitle className="mb-2 text-lg">{course.title}</CardTitle>
            <CardDescription className="line-clamp-2 text-sm">{course.description}</CardDescription>
            <p className="mt-2 text-sm font-semibold">{course.instructor.name}</p>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-2 p-4 pt-0">
            <div className="flex w-full items-center text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{course.rating.toFixed(1)}</span>
                </div>
                <span className="mx-2">•</span>
                <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{course.students.toLocaleString()}</span>
                </div>
                <div className="ml-auto">
                    <Badge variant="secondary">{course.level}</Badge>
                </div>
            </div>
             <Button asChild className="mt-2 w-full">
                <Link href={`/courses/${course.id}`}>
                    View Course <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
             </Button>
        </CardFooter>
    </Card>
  );
}
