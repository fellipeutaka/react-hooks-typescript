import { useState } from "react";
import PostList from "./PostList";
import { Container } from "./styles";

export default function Memo() {
  const [newPost, setNewPost] = useState("");
  return (
    <Container>
      <input
        type="text"
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
        placeholder="Change parent component state"
      />
      <PostList />
    </Container>
  );
}
