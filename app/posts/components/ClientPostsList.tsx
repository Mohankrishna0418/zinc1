'use client';
import React, { useCallback, useEffect, useState } from 'react';

type Post = {
  id: string;
  title: string;
};

const ClientPostList = () => {
  const [isloading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Post[] | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/posts');

      if (response.status !== 200) {
        setLoading(false);
        setError(new Error('Something went wrong'));
        return;
      }
      const posts: Post[] = await response.json();
      setLoading(false);
      setData(posts);
    } catch (e) {
      setLoading(false);
      setError(new Error('Something went wrong'));
      return;
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  if (isloading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container mx-auto">
      {data?.map((post: Post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
};

export default ClientPostList;