import React from "react";
import ItemList from "./ItemList";

export default function List({ posts, deletePost }) {
  return (
    <div className="posts__list">
      <ul>
        {posts.map((post) => (
          <ItemList key={post.id} deletePost={deletePost} {...post} />
        ))}
      </ul>
    </div>
  );
}
