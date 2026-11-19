
"use client";

import { useRef } from "react";
import Link from "next/link";
import BookCard from "./book-card";

const popularBooks = [
  {
    title: "Tomorrow, and Tomorrow, and Tomorrow",
    author: "Gabrielle Zevin",
    image: "/books/tomorrow.jpg",
    rating: "4.2",
    reviews: "2.1k",
    genre: "Fiction",
    pages: "416",
    rank: "01",
  },
  {
    title: "The Creative Act",
    author: "Rick Rubin",
    image: "/books/creative-act.jpg",
    rating: "4.1",
    reviews: "2.1k",
    genre: "Creativity",
    pages: "432",
    rank: "02",
  },
  {
    title: "Educated",
    author: "Tara Westover",
    image: "/books/educated.jpg",
    rating: "4.5",
    reviews: "2.1k",
    genre: "Memoir",
    pages: "352",
    rank: "03",
  },
  {
    title: "The Courage to Be Disliked",
    author: "Ichiro Kishimi",
    image: "/books/courage.jpg",
    rating: "4.0",
    reviews: "2.1k",
    genre: "Psychology",
    pages: "288",
    rank: "04",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    image: "/books/alchemist.jpg",
    rating: "3.9",
    reviews: "2.1k",
    genre: "Fiction",
    pages: "208",
    rank: "05",
  },
];

export default function PopularThisWeek() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    carouselRef.current?.scrollBy({
      left: direction === "right" ? 400 : -400,
      behavior: "smooth",
    });
  };

  return (
    <section className="mx-auto max-w-[1200px] px-6 py-8">

      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="font-serif text-2xl text-[#392b25]">
            Popular This Week
          </h2>
          <p className="mt-1 text-[10px] text-[#948578]">
            The reads our community can't put down.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/popular"
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
        {popularBooks.map((book) => (
          <div key={book.title}>
            <div className="mb-2 flex items-center justify-between">
              <span className="font-serif text-sm text-[#ad5035]">
                {book.rank}
              </span>
              <span className="text-[7px] uppercase text-[#948578]">
                This week's most loved
              </span>
            </div>

            <BookCard book={book} />
          </div>
        ))}
      </div>

    </section>
  );
}
