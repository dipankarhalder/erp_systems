import { useState } from "react";
import "./style.scss";

export const Input = () => {
  const [name, setName] = useState("");
  const handleChange = () => setName("hello");

  return (
    <input
      type={"text"}
      value={name}
      onChange={handleChange}
      placeholder={"Hello"}
      name={"name"}
      className={`appInput`}
    />
  );
};
