import Image from "next/image";
import { Button } from "@base-ui/react";
import Link from "next/link";
import RecommendedBooks from "@/components/home/recommended-books";
import CategoriesSection from "@/components/home/categories-section";
import PopularAuthors from "@/components/home/popular-authors";
import AdaptationsSection from "@/components/home/adaptations-section";
import PopularThisWeek from "@/components/home/popular-this-week";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf7f2]">

      <section className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-8 py-12 md:grid-cols-2 md:py-16">

        {/* Left Side -text */}
        <div className="flex flex-col items-start">

          <p className="mb-5 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-wide text-[#a94e32]">
            <span className="h-px w-5 bg-[#a94e32]"></span>
            A WORLD BETWEEN THE PAGES
          </p>

          <h1 className="max-w-md font-serif text-5xl leading-[1.05] text-[#392b25] md:text-6xl">
            Find Your Next
            <br />
            Book
          </h1>

          <p className="mt-5 max-w-sm text-[13px] leading-6 text-[#817367]">
             For the stories that stay with you. Discover new worlds,
             meet unforgettable voices, and find your next great read.
          </p>

          <Link href={"/categories"}
            className="mt-5 inline-flex items-center gap-3 rounded-md bg-[#ad5035] px-5 py-3 text-[11px] font-medium text-white transition hover:bg-[#893d28]">
            Explore Now
            <span>→</span>
          </Link>

          <p className="mt-5 flex items-center gap-2 text-[9px] text-[#817367]">
            <span className="text-[#ad5035]">✣</span>
            A little curiosity. A whole new chapter.
          </p>

        </div>

        {/* Right Side - Book Covers */}

        <div className="relative flex h-[300px] items-center justify-center md:h-[340px]">

          {/* Oval Background */}
          <div className="absolute h-[230px] w-[90%] rounded-[50%] bg-[#f2d7b3] md:h-[270px]"></div>

          <div className="relative z-10 flex h-full w-full items-center justify-center">

              <div  className="absolute left-[5%] top-[23%] z-10 w-[27%] -rotate-[9deg] shadow-xl transition hover:-translate-y-2">
              <Image 
                src="/books/thousand-splendid-suns.jpg"
                alt="A Thousand Splendid Suns"
                width={180}
                height={270}
                className="h-auto w-full rounded-sm" />
            </div>

            <div className="absolute left-[35%] top-[5%] z-20 w-[32%] shadow-2xl transition hover:-translate-y-2">
              <Image 
                src="/books/midnight-library.jpg"
                alt="The Midnight Library"
                width={200}
                height={300} 
                className="h-auto w-full rounded-sm" />
            </div>

            <div className="absolute right-[4%] top-[26%] z-10 w-[25%] rotate-[9deg] shadow-xl transition hover:-translate-y-2">
              <Image 
                src="/books/only-one-left.jpg"
                alt="The Only One Left"
                width={180}
                height={270} 
                className="h-auto w-full rounded-sm" />
            </div>
          </div>

          <div className="absolute bottom-0 z-30 flex w-full items-center justify-center gap-2 border-t border-[#d9c7b2] pt-3 text-[8px] uppercase text-[#817367]">
            <span className="text-[#ad5035]">♧</span>
            Good stories. Great Company.
          </div>

        </div>

      </section>

      {/* Recommended Books */}
      <RecommendedBooks />

      {/* Categories */}
      <CategoriesSection />

      {/* Adaptations */}
      <AdaptationsSection />

      {/* Popular This Week */}
      <PopularThisWeek />

      {/* Popular Authors */}
      <PopularAuthors />
    </main>

    
  );
}
