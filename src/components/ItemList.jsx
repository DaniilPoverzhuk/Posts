import React from "react";
import Button from "./UI/button/Button";

export default function ItemList({ deletePost, title, description, id }) {
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <p>{title}</p>
        <p>{description}</p>
      </div>
      <Button
        value="Удалить"
        onClick={() => deletePost(id)}
        style={{ height: "30px" }}
      />
    </li>
  );
}
