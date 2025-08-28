import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockCourses } from "@/lib/mock-data";
import { BookOpen, CheckCircle, ChevronLeft, FlaskConical, PlayCircle, Star, User } from "lucide-react";

export default function CoursePage({ params }: { params: { courseId: string } }) {
  const course = mockCourses.find(c => c.id === params.courseId);

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  }

  if (!course) {
    return (
      <div className="flex h-full min-h-0 flex-col items-center justify-center">
        <p>Course not found.</p>
      </div>
    );
  }

  const syllabus = [
    { title: "Introduction to Course", duration: "15m", completed: true },
    { title: "Core Concepts of Subject", duration: "45m", completed: true },
    { title: "Hands-on Project 1", duration: "1h 30m", completed: false },
    { title: "Advanced Techniques", duration: "2h", completed: false },
    { title: "Final Assessment", duration: "1h", completed: false },
  ]

  return (
    <div className="flex h-full min-h-0 flex-col">
      <Header title={course.title} Icon={BookOpen} />
      <main className="flex-1 overflow-auto p-4 md:p-6">
        <div className="mx-auto max-w-6xl">
            <Button asChild variant="outline" className="mb-4">
                <Link href="/courses">
                    <ChevronLeft className="mr-2 h-4 w-4" />
                    Back to Courses
                </Link>
            </Button>
            <div className="grid gap-8 md:grid-cols-3">
                <div className="md:col-span-2">
                    <Card className="overflow-hidden">
                        <div className="relative aspect-video">
                        <Image
                            src={course.imageUrl}
                            alt={course.title}
                            fill
                            className="object-cover"
                            data-ai-hint="course thumbnail"
                        />
                        </div>
                        <CardContent className="p-6">
                            <h1 className="text-3xl font-bold">{course.title}</h1>
                            <p className="mt-2 text-muted-foreground">{course.description}</p>
                            
                            <div className="mt-4 flex flex-wrap items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <Avatar className="h-10 w-10">
                                        <AvatarImage src={course.instructor.avatar} alt={course.instructor.name} />
                                        <AvatarFallback>{getInitials(course.instructor.name)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold">{course.instructor.name}</p>
                                        <p className="text-sm text-muted-foreground">Instructor</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1 text-sm">
                                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                    <span className="font-semibold">{course.rating.toFixed(1)}</span>
                                    <span className="text-muted-foreground">({course.students.toLocaleString()} students)</span>
                                </div>
                                <Badge variant="secondary">{course.level}</Badge>
                            </div>
                        </CardContent>
                    </Card>

                    <Tabs defaultValue="syllabus" className="mt-8 w-full">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
                            <TabsTrigger value="lab" disabled={!course.hasLab}>
                                <FlaskConical className="mr-2 h-4 w-4" />
                                Virtual Lab
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="syllabus">
                            <Card>
                                <CardContent className="p-6 space-y-4">
                                    {syllabus.map((item, index) => (
                                        <div key={index} className="flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                {item.completed ? (
                                                    <CheckCircle className="h-6 w-6 text-green-500" />
                                                ) : (
                                                    <PlayCircle className="h-6 w-6 text-muted-foreground" />
                                                )}
                                                <div>
                                                    <p className="font-medium">{item.title}</p>
                                                    <p className="text-sm text-muted-foreground">{item.duration}</p>
                                                </div>
                                            </div>
                                            <Button variant={item.completed ? "secondary" : "default"} size="sm">
                                                {item.completed ? 'Rewatch' : 'Start'}
                                            </Button>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="lab">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Enter the Virtual Lab</CardTitle>
                                    <CardDescription>Apply your knowledge in a hands-on, simulated environment.</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex aspect-video w-full items-center justify-center rounded-lg border-2 border-dashed bg-secondary">
                                        <Button asChild size="lg">
                                            <Link href={`/courses/${course.id}/lab`}>
                                                <FlaskConical className="mr-2 h-5 w-5" />
                                                Launch Lab
                                            </Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Course Progress</CardTitle>
                        </CardHeader>
                        <CardContent>
                           <Progress value={40} className="mb-2"/>
                           <p className="text-center text-sm text-muted-foreground">40% complete</p>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">Continue Learning</Button>
                        </CardFooter>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle>Certificate of Completion</CardTitle>
                            <CardDescription>Finish the course to unlock your certificate.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-center rounded-md border border-dashed p-8 text-center text-muted-foreground">
                                <p>Certificate is locked</p>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button variant="secondary" className="w-full" disabled>Download Certificate</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}
