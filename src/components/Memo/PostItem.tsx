import { Post } from "./PostList";

interface PostItemProps {
  post: Post;
}

export default function PostItem({ post }: PostItemProps) {
  return (
    <li>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </li>
  );
}
