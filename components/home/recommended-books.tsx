
"use client";

import { useRef } from "react";
import Link from "next/link";
import BookCard from "./book-card";

const books = [
  {
    title: "The Midnight Library",
    author: "Matt Haig",
    category: "XYZ",
    type: "Fiction",
    image: "/books/midnight-library.jpg",
    rating: "4.2",
    reviews: "2.1k",
  },
  {
    title: "Yellow Face",
    author: "Rebecca F Kuang",
    image: "/books/yellowface.jpg",
    rating: "4.4",
    reviews: "2.1k",
  },
  {
    title: "Child 44",
    author: "Tom Rob Smith",
    image: "/books/child44.jpg",
    rating: "4.5",
    reviews: "2.1k",
  },
  {
    title: "A Man Called Ove",
    author: "Fredrik Backman",
    image: "/books/man-called-ove.jpg",
    rating: "4.2",
    reviews: "2.1k",
  },
  {
    title: "The Only One Left",
    author: "Riley Sager",
    image: "/books/only-one-left.jpg",
    rating: "3.8",
    reviews: "2.1k",
  },
  {
    title: "The Book Thief",
    author: "Marcus Zusak",
    image: "/books/book-thief.jpg",
    rating: "4.0",
    reviews: "2k",
  },
  {
    title: "A Thousand Splendid Suns",
    author: "Khaled Hosseini",
    image: "/books/thousand-splendid-suns.jpg",
    rating: "4.0",
    reviews: "2k",
  },
];

export default function RecommendedBooks() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    carouselRef.current?.scrollBy({
      left: direction === "right" ? 400 : -400,
      behavior: "smooth",
    });
  };

  return (
    <section className="mx-auto max-w-[1200px] px-6 py-10">

      {/* Section heading */}
      <div className="mb-4 flex items-center justify-between">

        <div>
          <h2 className="font-serif text-2xl text-[#392b25]">
            Recommended For You
          </h2>

          <p className="mt-1 text-[10px] text-[#948578]">
            A few stories we think you'll love getting lost in.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/categories"
            className="mr-2 text-[10px] text-[#ad5035] hover:underline"
          >
            See all
          </Link>

          <button
            onClick={() => scroll("left")}
            aria-label="Previous books"
            className="h-7 w-7 rounded-full border border-[#e9e0d5] text-[#817367] hover:bg-[#eee9df]"
          >
            ‹
          </button>

          <button
            onClick={() => scroll("right")}
            aria-label="Next books"
            className="h-7 w-7 rounded-full border border-[#e9e0d5] text-[#817367] hover:bg-[#eee9df]"
          >
            ›
          </button>
        </div>

      </div>

      {/* Book carousel */}
      <div
        ref={carouselRef}
        className="grid grid-flow-col auto-cols-[150px] gap-3 overflow-x-auto pb-2 sm:auto-cols-[180px] sm:gap-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {books.map((book) => (
          <BookCard key={book.title} book={book} />
        ))}
      </div>

    </section>
  );
}
