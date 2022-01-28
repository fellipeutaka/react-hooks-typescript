import { useMemo, useState } from "react";
import { Container } from "./styles";

export default function UseMemo() {
  const [triangleBase, setTriangleBase] = useState(0);
  const [triangleHeight, setTriangleHeight] = useState(0);

  // This calculation will only be redone when the height or base changes
  const area = useMemo(
    () => (triangleBase * triangleHeight) / 2,
    [triangleBase, triangleHeight]
  );

  return (
    <Container>
      <h1>useMemo</h1>
      <label htmlFor="base">Base</label>
      <input
        type="text"
        id="base"
        value={triangleBase}
        onChange={(e) => setTriangleBase(parseFloat(e.target.value))}
      />
      <label htmlFor="height">Height</label>
      <input
        type="text"
        id="height"
        value={triangleHeight}
        onChange={(e) => setTriangleHeight(parseFloat(e.target.value))}
      />
      <span>Area of that triangle: {area}</span>
    </Container>
  );
}
