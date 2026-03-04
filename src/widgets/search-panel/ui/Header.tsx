import { memo } from "react";
import { SearchPanel } from "./SearchPanel";
import "../style/search-section.css";

type Props = {
  query: string;
  setQuery: (value: string) => void;
};

export const Header = memo(({ query, setQuery }: Props) => {
  return (
    <div className="search__section">
      <h1 className="search__section-title">Testovoe po react</h1>
      <SearchPanel
        query={query}
        setQuery={setQuery}
        placeholder="Search products..."
      />
    </div>
  );
});
