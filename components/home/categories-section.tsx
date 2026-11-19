"use client"

import Link from "next/link";
import { useRef } from "react";
import CategoryCard from "./category-card";

const categories = [
  {
    name: "Fiction",
    image: "/categories/fiction.jpg",
    count: "2,480 stories",
    href: "/categories/fiction",
  },
  {
    name: "Non-Fiction",
    image: "/categories/non-fiction.jpg",
    count: "1,920 discoveries",
    href: "/categories/non-fiction",
  },
  {
    name: "Self Help",
    image: "/categories/self-help.jpg",
    count: "860 fresh perspectives",
    href: "/genres/self-help",
  },
  {
    name: "Romance",
    image: "/categories/romance.jpg",
    count: "1,680 love stories",
    href: "/genres/romance",
  },
  {
    name: "Mystery & Thriller",
    image: "/categories/mystery1.jpg",
    count: "1,240 page-turners",
    href: "/genres/mystery",
  },
  {
    name: "Horror",
    image: "/categories/horror.jpg",
    count: "1750 horror reads",
    href: "/genres/horror"
  },
  {
    name: "Biography",
    image: "/categories/biography.jpg",
    count: "740 timeless reads",
    href: "/genres/biography",
  },
  {
    name: "Science Fiction",
    image: "/categories/sci-fi.jpg",
    count: "1750 science fiction reads",
    href: "/genres/science-fiction"
  },
  {
    name: "History",
    image: "/categories/history.jpg",
    count: "1750 historical reads",
    href: "/genres/history"
  },
];

export default function CategoriesSection() {
    const carouselRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
    carouselRef.current?.scrollBy({
      left: direction === "right" ? 400 : -400,
      behavior: "smooth",
    });
  };

  return (
    <section id="categories"  className="mx-auto max-w-[1200px] px-6 py-10">

      {/* Section heading */}
      <div className="mb-4 flex items-center justify-between">

        <div>
          <h2 className="font-serif text-2xl text-[#392b25]">
            Categories
          </h2>

          <p className="mt-1 text-[10px] text-[#948578]">
            Whatever your mood, there's a world waiting.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* <Link
            href="/categories"
            className="mr-2 text-[10px] text-[#ad5035] hover:underline"
          >
            See all
          </Link> */}

          <button
            onClick={() => scroll("left")}
            aria-label="Previous categories"
            className="h-7 w-7 rounded-full border border-[#e9e0d5] text-[#817367] hover:bg-[#eee9df]"
          >
            ‹
          </button>

          <button
            onClick={() => scroll("right")}
            aria-label="Next categories"
            className="h-7 w-7 rounded-full border border-[#e9e0d5] text-[#817367] hover:bg-[#eee9df]"
          >
            ›
          </button>
        </div>

      </div>

      {/* Category carousel */}
            <div
              ref={carouselRef}
              className="grid grid-flow-col auto-cols-[150px] gap-3 overflow-x-auto pb-2 sm:auto-cols-[180px] sm:gap-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {categories.map((category) => (
                <CategoryCard key={category.name} category={category} />
              ))}
            </div>

    </section>
  );
}
