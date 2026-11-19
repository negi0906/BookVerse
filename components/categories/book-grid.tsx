import { books } from "@/lib/books";
import BookCard from "./book-card";

type Book = (typeof books)[number];

export default function BookGrid({ books }: { books: Book[] }) {
  if (books.length === 0) {
    return (
      <p className="py-12 text-center text-[#817367]">
        No books found in this category.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {books.map((book) => (
        <BookCard key={book.slug} book={book} />
      ))}
    </div>
  );
}