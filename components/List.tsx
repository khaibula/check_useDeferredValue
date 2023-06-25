import React, { memo, useDeferredValue } from 'react'
import { BookType } from "./Main";
import { Book } from "./Book";
import { useQuery } from "@tanstack/react-query";

interface ListProps {
  books: Array<BookType>;
}

export const List = memo(function List(props: ListProps) {
  const items = [];

  for (let i = 0; i < props.books.length; i++) {
    const book = props.books[i];
    items.push(<Book key={i} name={book.name} annotation={book.annotation} />);
  }

  return (
    <ul className="flex flex-col gap-2 mx-10">
      {items}
    </ul>
  )
})
