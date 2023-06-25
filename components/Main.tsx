import * as React from 'react';
import { List } from "./List";
import { useQuery } from "@tanstack/react-query";
import { useDeferredValue } from "react";

export interface BookType {
  id: number;
  name: string;
  annotation: string;
}

export const Main = () => {
  const [search, setSearch] = React.useState('');
  const { data, isFetching } = useQuery<BookType[]>({
    initialData: [],
    queryKey: ['main'],
    refetchOnWindowFocus: false,
    queryFn: async () => {
      return fetch('https://api.bookriver.ru/api/v1/books?perPage=100')
        .then(response => response.json())
        .then((data) => data.data)
    }
  });

  const filteredValue = data.filter(book => book.annotation.includes(search));
  const deferredValue = useDeferredValue(filteredValue);

  const isLoading = filteredValue !== deferredValue;

  return (
    <div className="bg-gray-200 flex flex-col items-center">
      <div className="max-w-4xl w-full my-10 ">
        <div>
          <input
            type="email"
            id="example2"
            className="block w-full h-10 p-2 rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
            placeholder="your text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      {isFetching || isLoading ? <p className="my-10" >...Loading</p> : <List books={filteredValue} />}
    </div>
  );
};
