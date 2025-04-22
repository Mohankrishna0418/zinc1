"use client";
import { useQuery } from "@tanstack/react-query";

type Post = {
  id: string;
  title: string;
};

const ClientPostList = () => {
  const { data, isPending, error } = useQuery<Post[]>({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3000/posts");
      return await response.json();
    },
  });

  if (isPending) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
        {data?.map((post) => (
          <div key={post.id}>
            {post.title}
          </div>
        ))}
    </div>
  );
};

export default ClientPostList;
