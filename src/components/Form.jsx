import React from "react";
import Button from "./UI/button/Button";
import Input from "./UI/input/Input";

export default function Form({ createPost, formValue, setFormValue }) {
  return (
    <form
      className="posts__name"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Input
        onChange={(event) =>
          setFormValue({ ...formValue, title: event.target.value })
        }
      />
      <Input
        onChange={(event) =>
          setFormValue({ ...formValue, description: event.target.value })
        }
      />
      <Button value="Создать пост" onClick={createPost} />
    </form>
  );
}
