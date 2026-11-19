
import Image from "next/image";

interface Book {
  title: string;
  author: string;
  image: string;
  rating: string;
  reviews: string;

  // Optional properties
  adaptation?: string;
  buttonLabel?: string;
  genre?: string;
  pages?: string;
  rank?: string;
}

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <div className="min-w-0 overflow-hidden rounded-xl border border-[#e9e0d5] bg-[#fffdf9]">

      {/* Book cover section */}
      <div className="relative flex h-[175px] items-center justify-center bg-[#f0ebe1] p-3">

        {/* Adaptation badge */}
        {book.adaptation && (
          <span className="absolute left-2 top-2 rounded-sm bg-white px-2 py-1 text-[8px] text-[#ad5035]">
            ▣ {book.adaptation}
          </span>
        )}

        {/* Book image */}
        <Image
          src={book.image}
          alt={book.title}
          width={110}
          height={160}
          className="h-[145px] w-auto object-contain shadow-lg transition duration-300 hover:-translate-y-1"
        />

      </div>

      {/* Book details */}
      <div className="p-3">

        <h3 className="line-clamp-2 min-h-8 font-serif text-[12px] font-medium text-[#392b25]">
          {book.title}
        </h3>

        <p className="mt-1 text-[10px] text-[#948578]">
          {book.author}
        </p>

        {/* Genre and pages (for popular books) */}
        {book.genre && book.pages && (
          <p className="mt-1 text-[9px] text-[#948578]">
            {book.genre} · {book.pages} pages
          </p>
        )}

        {/* Rating and action */}
        <div className="mt-2 flex items-center justify-between">

          <div className="flex items-center gap-1 text-[9px]">
            <span className="text-[#c17a32]">☆</span>

            <span className="font-semibold text-[#392b25]">
              {book.rating}
            </span>

            <span className="text-[#948578]">
              ({book.reviews})
            </span>
          </div>

          {/* View Book button or Wishlist button */}
          {book.buttonLabel ? (
            <button className="rounded border border-[#e9e0d5] px-3 py-1 text-[9px] text-[#392b25] transition hover:bg-[#ad5035] hover:text-white">
              {book.buttonLabel}
            </button>
          ) : (
            <button
              aria-label={`Add ${book.title} to wishlist`}
              className="flex h-6 w-6 items-center justify-center rounded-full border border-[#e9e0d5] text-sm text-[#ad5035] transition hover:bg-[#ad5035] hover:text-white"
            >
              +
            </button>
          )}

        </div>

      </div>
    </div>
  );
}
