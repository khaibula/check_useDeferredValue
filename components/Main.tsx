import * as React from 'react';
import { useQuery } from "@tanstack/react-query";
import { Suspense, useDeferredValue, useEffect } from "react";

interface Book {
  id: number;
  name: string;
}

export const Main = () => {
  const viewData = useDeferredValue<Book[]>([]);

  const { data, isFetching } = useQuery<Book[]>({
    initialData: [],
    queryKey: ['main'],
    queryFn: async () => {
      const response = await fetch('https://api.bookriver.ru/api/v1/books?perPage=10');

      return response.json().then((data) => data.data);
    }
  });

  useEffect(() => {
    viewData
  }, [data])

  if (isFetching) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      <Suspense
        fallback={
          <div>
            <p>12...</p>
          </div>
        }
      >
        {viewData.map((post) => {
          return <li key={post.id}>{post.name}</li>
        })}
      </Suspense>
    </ul>
  );
};
