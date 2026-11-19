
"use client";

import { useRef } from "react";
import Link from "next/link";
import BookCard from "./book-card";

const adaptationBooks = [
  {
    title: "Dune",
    author: "Frank Herbert",
    image: "/books/dune.jpg",
    rating: "4.3",
    reviews: "2.1k",
    adaptation: "Film adaptation",
    buttonLabel: "View Book",
  },
  {
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    image: "/books/crawdads.jpg",
    rating: "4.4",
    reviews: "2.1k",
    adaptation: "Film adaptation",
    buttonLabel: "View Book",
  },
  {
    title: "Little Women",
    author: "Louisa May Alcott",
    image: "/books/little-women.jpg",
    rating: "4.2",
    reviews: "2.1k",
    adaptation: "Film adaptation",
    buttonLabel: "View Book",
  },
  {
    title: "Normal People",
    author: "Sally Rooney",
    image: "/books/normal-people.jpg",
    rating: "3.8",
    reviews: "2.1k",
    adaptation: "TV series",
    buttonLabel: "View Book",
  },
  {
    title: "All the Light We Cannot See",
    author: "Anthony Doerr",
    image: "/books/all-the-light.jpg",
    rating: "4.3",
    reviews: "2.1k",
    adaptation: "Netflix series",
    buttonLabel: "View Book",
  },
];

export default function AdaptationsSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    carouselRef.current?.scrollBy({
      left: direction === "right" ? 400 : -400,
      behavior: "smooth",
    });
  };

  return (
    <section className="mx-auto max-w-[1200px] px-6 py-8">

      <div className="mb-4 flex items-center justify-between">
        <div>
          <h2 className="font-serif text-2xl text-[#392b25]">
            Books with Adaptations
          </h2>
          <p className="mt-1 text-[10px] text-[#948578]">
            Before the screen, there was a story. Read the originals.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/adaptations"
            className="mr-2 text-[10px] text-[#ad5035]">
            See all
          </Link>

          <button onClick={() => scroll("left")}
            aria-label="Previous books"
            className="h-7 w-7 rounded-full border border-[#e9e0d5]">
            ‹
          </button>

          <button onClick={() => scroll("right")}
            aria-label="Next books"
            className="h-7 w-7 rounded-full border border-[#e9e0d5]">
            ›
          </button>
        </div>
      </div>

      <div
        ref={carouselRef}
        className="grid grid-flow-col auto-cols-[150px] gap-3 overflow-x-auto pb-2 sm:auto-cols-[180px] sm:gap-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {adaptationBooks.map((book) => (
          <BookCard key={book.title} book={book} />
        ))}
      </div>

    </section>
  );
}
