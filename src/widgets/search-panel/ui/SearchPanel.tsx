import { useEffect, useRef } from "react";

type Props = {
  query: string;
  setQuery: (value: string) => void;
  placeholder?: string;
};

export const SearchPanel = ({
  query,
  setQuery,
  placeholder = "Search...",
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <input
      className="search__section-input"
      ref={inputRef}
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder={placeholder}
    />
  );
};
