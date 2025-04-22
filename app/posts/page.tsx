import React, { Suspense } from 'react';
import ClientPostsList from './components/ClientPostsList';

const PostsPage = () => {
  return (
    <div>
      <h1>Posts</h1>
      <ClientPostsList />
    </div>
  );
};

export default PostsPage;