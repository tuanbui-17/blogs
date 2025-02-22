import BlogPosts from "@/components/Blog/BlogPosts";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <p>🖥️ Full-stack developer ｜📸 Photography enthusiast (Sony)</p>
        <p>💬 Try, fail, retry. That’s the rhythm of growth.</p>
      </div>
      <p className="text-xl font-medium">Latest Posts</p>
      <BlogPosts />
    </div>
  );
}
