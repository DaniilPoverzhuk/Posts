import { useMemo, useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import SearchQuery from "./components/SearchQuery";
import SelectComponent from "./components/Select";

function App() {
  const [formValue, setFormValue] = useState({ title: "", description: "" });
  const [posts, setPosts] = useState([
    { title: "ии", description: "123", id: 1 },
    { title: "вв", description: "456", id: 2 },
    { title: "аа", description: "789", id: 3 },
  ]);
  const [searchQueryValue, setSearchQueryValue] = useState("");
  const [selectedPost, setSelectedPost] = useState("");

  const sortedPosts = useMemo(() => {
    if (selectedPost) {
      return [...posts].sort((a, b) =>
        a[selectedPost].localeCompare(b[selectedPost])
      );
    }
    return posts;
  }, [selectedPost, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLocaleLowerCase().includes(searchQueryValue)
    );
  }, [searchQueryValue, sortedPosts]);

  const createPost = (event) => {
    event.preventDefault();
    setPosts([...posts, formValue]);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const sortPosts = (sort) => {
    setSelectedPost(sort.value);
  };

  return (
    <div className="posts">
      <Form
        createPost={createPost}
        formValue={formValue}
        setFormValue={setFormValue}
      />
      <SearchQuery
        searchQueryValue={searchQueryValue}
        setSearchQueryValue={setSearchQueryValue}
      />
      <SelectComponent
        value={selectedPost}
        onChange={sortPosts}
        options={[
          { value: "title", label: "По названию" },
          { value: "description", label: "По описанию" },
        ]}
      />
      {sortedAndSearchedPosts.length ? (
        <List
          posts={sortedAndSearchedPosts}
          deletePost={deletePost}
          value={searchQueryValue}
        />
      ) : (
        <h1 style={{ textAlign: "center" }}>Посты не найдены</h1>
      )}
    </div>
  );
}

export default App;
