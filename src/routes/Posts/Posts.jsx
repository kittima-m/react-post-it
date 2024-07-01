import PostList from '../../components/PostList/PostList';
import { Outlet } from 'react-router-dom';

export default function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}

export async function loader() {
  const response = await fetch('http://localhost:8080/posts');
  const responseData = await response.json();
  return responseData.posts
}