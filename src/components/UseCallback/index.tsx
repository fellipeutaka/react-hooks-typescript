import { useCallback, useRef, useState } from "react";
import { Container } from "./styles";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  stargazers_count: number;
  language: string;
}

export default function UseCallback() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  // If you don't use useCallback, every time this component re-render, this function will be called again.
  const listRepos = useCallback(() => {
    (async () => {
      const response = await fetch(
        `https://api.github.com/users/${inputRef.current?.value}/repos`
      );
      const data = await response.json();
      setRepos(data);
    })();
  }, [repos]);

  const [count, setCount] = useState(0);
  return (
    <Container>
      <h1>useCallback</h1>
      <input type="text" placeholder="GitHub username" ref={inputRef} />
      <button onClick={listRepos}>List all repos</button>
      {repos && (
        <div className="repos">
          {repos.map((repo) => (
            <div className="repo" key={repo.id}>
              <a href={repo.html_url}>{repo.name}</a>
              <span>Stars: {repo.stargazers_count}</span>
              <span>Language: {repo.language}</span>
            </div>
          ))}
        </div>
      )}
      <div className="count">
        <span>Count: {count}</span>
        <button onClick={() => setCount((previousValue) => previousValue + 1)}>
          Add to count
        </button>
      </div>
    </Container>
  );
}
