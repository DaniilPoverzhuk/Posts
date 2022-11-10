import React from "react";
import Input from "./UI/input/Input";

export default function SearchQuery({ searchQueryValue, setSearchQueryValue }) {
  return (
    <div className="search">
      <h3 className="search__title">Поиск по загаловку</h3>
      <Input
        value={searchQueryValue}
        onChange={(event) => setSearchQueryValue(event.target.value)}
      />
    </div>
  );
}
