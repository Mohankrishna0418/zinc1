import React from 'react'

type Post = {
  id: string;
  title: string;
};

const PostsLists = async () => {

 const response = await fetch('http://localhost:3000/posts');

 const posts: Post[] = await response.json();

 return (
   <div className="container mx-auto">
     {posts.map((post: Post) => (
       <div key={post.id}>{post.title}</div>
     ))}
   </div>
 );
}

export default PostsLists