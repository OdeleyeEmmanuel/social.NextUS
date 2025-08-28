import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { mockCourses } from "@/lib/mock-data";
import { ChevronLeft, FlaskConical } from "lucide-react";
import Link from "next/link";

export default function CourseLabPage({ params }: { params: { courseId: string } }) {
  const course = mockCourses.find(c => c.id === params.courseId);

  if (!course) {
    return (
      <div className="flex h-full min-h-0 flex-col items-center justify-center">
        <p>Course not found.</p>
      </div>
    );
  }

  return (
    <div className="flex h-full min-h-0 flex-col">
      <Header title={`${course.title} - Lab`} Icon={FlaskConical} />
      <main className="flex-1 overflow-auto p-4 md:p-6">
        <div className="mx-auto max-w-4xl">
            <Button asChild variant="outline" className="mb-4">
                <Link href={`/courses/${params.courseId}`}>
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back to Course
                </Link>
            </Button>
            <Card>
                <CardHeader>
                    <CardTitle>Virtual Laboratory</CardTitle>
                    <CardDescription>Practice your skills in this interactive environment.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex aspect-video w-full items-center justify-center rounded-lg border-2 border-dashed bg-secondary">
                        <p className="text-muted-foreground">Interactive lab content coming soon!</p>
                    </div>
                </CardContent>
            </Card>
        </div>
      </main>
    </div>
  );
}
