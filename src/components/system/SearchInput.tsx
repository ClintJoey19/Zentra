import { Search } from "lucide-react";
import React from "react";
import { Input } from "../ui/input";

type SearchInputProps = {
  placeholder?: string;
};

const SearchInput = ({ placeholder = "Search" }: SearchInputProps) => {
  return (
    <div className="relative flex items-center">
      <Search className="absolute size-4 left-2 text-muted-foreground" />
      <Input placeholder={placeholder} className="px-0 pl-8 pr-3" />
    </div>
  );
};

export default SearchInput;
