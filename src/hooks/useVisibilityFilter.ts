import React from "react";
import { TVisibilityFilter } from "../types";

function getVisibiltyFilter(): TVisibilityFilter {
  switch (window.location.hash) {
    case "#/active":
      return "ACTIVE";
    case "#/completed":
      return "COMPLETED";
    default:
      return "ALL";
  }
}

export default function useVisibilityFilter() {
  const [filter, setFilter] = React.useState<TVisibilityFilter>("ALL");
  React.useEffect(() => {
    const handler = (event: HashChangeEvent) => {
      if (event.oldURL !== event.newURL) {
        setFilter(getVisibiltyFilter());
      }
    };

    window.addEventListener("hashchange", handler);

    return () => {
      window.removeEventListener("hashchange", handler);
    };
  }, []);
  return filter;
}
