import PostCard from '../components/home/PostCard';

export default function Home() {
  return (
    <section className="flex justify-center mt-8 w-full">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-bold">New Post</h2>
        <div className="flex">
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
    </section>
  );
}
