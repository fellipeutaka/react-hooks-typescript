import { useEffect, useState } from "react";
import { Container } from "./styles";

export default function UseEffect() {
  const [inputName, setInputName] = useState<string>("");

  useEffect(() => {
    document.title = inputName;
  }, [inputName]);
  return (
    <>
      <Container>
        <h1>useEffect</h1>
        <div>
          <input
            type="text"
            value={inputName}
            placeholder="Type page name"
            onChange={(e) => setInputName(e.target.value)}
          />
        </div>
      </Container>
    </>
  );
}
