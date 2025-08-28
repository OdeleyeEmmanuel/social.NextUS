import { Header } from "@/components/header";
import { CourseCard } from "@/components/courses/course-card";
import { mockCourses } from "@/lib/mock-data";
import { GraduationCap } from "lucide-react";

export default function CoursesPage() {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <Header title="Courses" Icon={GraduationCap} />
      <main className="flex-1 overflow-auto p-4 md:p-6">
        <div className="space-y-8">
            <div>
                <h2 className="text-2xl font-bold tracking-tight">Art & Design</h2>
                <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {mockCourses.filter(c => c.category === 'Art & Design').map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </div>
             <div>
                <h2 className="text-2xl font-bold tracking-tight">Science & Technology</h2>
                <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {mockCourses.filter(c => c.category === 'Science & Technology').map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}