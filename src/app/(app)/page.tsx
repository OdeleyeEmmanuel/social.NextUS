import { Header } from "@/components/header";
import { CreatePostForm } from "@/components/feed/create-post-form";
import { PostCard } from "@/components/feed/post-card";
import { Welcome } from "@/components/feed/welcome";
import { mockPosts } from "@/lib/mock-data";
import { Home as HomeIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <Header title="Home" Icon={HomeIcon} />
      <main className="flex-1 overflow-auto p-4 md:p-6">
        <div className="mx-auto max-w-2xl space-y-6">
          <Welcome />
          <CreatePostForm />
          {mockPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
}
