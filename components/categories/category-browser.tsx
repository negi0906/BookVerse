"use client";

import { useState } from "react";
import { books } from "@/lib/books";
import BookGrid from "./book-grid";

type Book = (typeof books)[number];

export default function CategoryBrowser({
  books,
}: {
  books: Book[];
}) {
  const [selectedGenre, setSelectedGenre] = useState("All");

  // Get unique genres from the available books
  const genres = [
    "All",
    ...new Set(books.flatMap((book) => book.genre ?? [])),
  ];

  // Filter books based on selected genre
  const filteredBooks =
    selectedGenre === "All"
      ? books
      : books.filter((book) =>
          book.genre?.includes(selectedGenre)
        );

  return (
    <div>
      {/* Genre Filters */}
      <div className="mb-8 flex flex-wrap gap-3">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => setSelectedGenre(genre)}
            className={`rounded-full border px-5 py-2 text-sm transition ${
              selectedGenre === genre
                ? "border-[#392b25] bg-[#392b25] text-white"
                : "border-[#e9e1d6] bg-white text-[#817367] hover:border-[#ad5035]"
            }`}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Book Count */}
      <p className="mb-5 text-sm text-[#817367]">
        {filteredBooks.length} books
      </p>

      {/* Book Grid */}
      <BookGrid books={filteredBooks} />
    </div>
  );
}