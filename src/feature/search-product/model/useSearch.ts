import { useState, useCallback } from "react";

export const useSearch = <T extends object>(field: keyof T) => {
  const [query, setQuery] = useState("");

  const filter = useCallback(
    (items: T[]) =>
      items.filter((item) =>
        String(item[field]).toLowerCase().includes(query.toLowerCase()),
      ),
    [query, field],
  );

  return { query, setQuery, filter };
};
