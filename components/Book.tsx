import React, { memo } from 'react';
import { BookType } from "./Main";

interface BookProps extends Pick<BookType, 'name' | 'annotation'> {
}

export function Book({ annotation, name }: BookProps) {

  let startTime = performance.now();
  while (performance.now() - startTime < 10) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }

  return (
    <div className="mx-auto max-w-4xl rounded-lg bg-white shadow">
      <div className="p-4">
        <h3 className="text-xl font-medium text-gray-900">{name}</h3>
        <p className="mt-1 text-gray-500">{annotation}</p>
      </div>
    </div>
  );
};
