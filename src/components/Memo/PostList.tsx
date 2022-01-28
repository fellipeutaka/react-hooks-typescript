import { memo, useEffect, useState } from "react";
import PostItem from "./PostItem";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function PostList() {
  const [list, setList] = useState<Post[]>([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setList(data);
    })();
  }, []);

  return (
    <ul>
      {list.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </ul>
  );
}

// memo prevents some component (PostItem, in this case) re-render if props or state doesn't change
export default memo(PostList);
