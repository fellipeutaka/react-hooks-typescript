import { Container } from "./styles";
import { useRef, useState } from "react";

interface User {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  location: string | null;
  bio: string | null;
  public_repos: number;
}

export default function UseRef() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [user, setUser] = useState<User>();

  const search = () => {
    inputRef.current?.value === ""
      ? alert("Please, type a valid username")
      : (async () => {
          const response = await fetch(
            `https://api.github.com/users/${inputRef.current?.value}`
          );
          const data = await response.json();
          setUser(data);
        })();
  };
  return (
    <Container>
      <h1>UseRef</h1>
      <div className="search">
        <input type="text" ref={inputRef} placeholder="GitHub Username" />
        <button onClick={search}>Search</button>
      </div>
      {user && (
        <div className="user">
          <h1>{user.login}</h1>
          {user.name && (
            <a href={user.html_url} rel="external" target="_blank">
              {user.name}
            </a>
          )}
          <div className="avatar">
            <img src={user.avatar_url} alt={`${user.name} avatar`} />
          </div>
          {user.location && <span>{user.location}</span>}
          {user.bio && <p>{user.bio}</p>}
          <span>Public repos: {user.public_repos}</span>
        </div>
      )}
    </Container>
  );
}
