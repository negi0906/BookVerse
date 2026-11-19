
import Link from "next/link";
import { Heart, MessageCircle, Star, ArrowLeft } from "lucide-react";
import { books } from "@/lib/books";

type Book = (typeof books)[number];

export default function BookHero({ book }: { book: Book }) {
  return (
    <section className="border-b border-[#e9e1d6] bg-[#faf7f2]">

      <div className="mx-auto max-w-[1200px] px-6 py-8">

        {/* Back navigation */}
        <Link
          href="/"
          className="mb-5 inline-flex items-center gap-2 text-xs text-[#817367] hover:text-[#ad5035]"
        >
          <ArrowLeft size={14} />
          Back to discovery
        </Link>

        <div className="grid items-center gap-8 md:grid-cols-[280px_1fr]">

          {/* Book cover */}
          <div className="flex justify-center">

            <div className="flex aspect-[2/3] w-[190px] flex-col items-center justify-center border-[5px] border-[#31574c] bg-[#173f38] p-5 text-center shadow-xl">

              <span className="text-[7px] uppercase tracking-[0.3em] text-[#c8a96c]">
                A novel
              </span>

              <h2 className="mt-10 font-serif text-2xl leading-tight text-[#e8d3a1]">
                {book.title}
              </h2>

              <span className="mt-5 text-[#c8a96c]">✦</span>

              <p className="mt-auto text-[8px] uppercase tracking-widest text-[#e8d3a1]">
                {book.author}
              </p>

            </div>

          </div>

          {/* Book information */}
          <div>

            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ad5035]">
              Book details
            </p>

            <h1 className="font-serif text-4xl leading-tight text-[#392b25] md:text-5xl">
              {book.title}
            </h1>

            <p className="mt-2 text-sm text-[#817367]">
              by <span className="text-[#ad5035]">{book.author}</span>
            </p>

            {/* Rating */}
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">

              <Star size={14} className="fill-[#c18a3c] text-[#c18a3c]" />

              <span className="font-semibold text-[#392b25]">
                {book.rating}
              </span>

              <span className="text-[#817367]">
                ({book.totalReviews.toLocaleString()} reviews)
              </span>

              {book.genre.map((genre) => (
                <span
                  key={genre}
                  className="border border-[#dfd5c8] px-2 py-1 text-[9px] text-[#817367]"
                >
                  {genre}
                </span>
              ))}

            </div>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#817367]">
              {book.description}
            </p>

            {/* Action buttons */}
            <div className="mt-6 flex flex-wrap gap-3">

              <button
                type="button"
                className="flex items-center gap-2 rounded-sm bg-[#ad5035] px-5 py-3 text-xs text-white transition hover:bg-[#913f2a]"
              >
                <Heart size={14} />
                Add to Wishlist
              </button>

              <a
                href="#discussion" 
                className="flex items-center gap-2 rounded-sm border border-[#dfd5c8] px-5 py-3 text-xs text-[#392b25] transition hover:bg-[#f0ebe1]"
              >
                <MessageCircle size={16} />
                Discussion
              </a>

            </div>

            {/* Book specifications */}
            <div className="mt-8 grid grid-cols-2 gap-5 border-t border-[#e9e1d6] pt-5 sm:grid-cols-4">

              {[
                { label: "Published", value: book.publishedDate },
                { label: "Pages", value: book.pages },
                { label: "Language", value: book.language },
                { label: "Publisher", value: book.publisher },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-[9px] uppercase tracking-widest text-[#ad5035]">
                    {item.label}
                  </p>

                  <p className="mt-2 text-xs text-[#392b25]">
                    {item.value}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
