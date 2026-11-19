import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { books } from "@/lib/books";

type Book = (typeof books)[number];

export default function BookCard({ book }: { book: Book }) {
  return (
    <Link
      href={`/books/${book.slug}`}
      className="group block"
    >
      {/* Book Cover */}
      <div className="relative aspect-[2/3] overflow-hidden rounded-lg bg-[#f0ebe1]">
        <Image
          src={book.cover}
          alt={book.title}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 200px"
        />
      </div>

      {/* Book Information */}
      <div className="mt-3 space-y-1">
        <h3 className="line-clamp-1 font-serif text-base text-[#392b25] group-hover:text-[#ad5035]">
          {book.title}
        </h3>

        <p className="text-sm text-[#817367]">
          {book.author}
        </p>

        <div className="flex items-center gap-1 text-sm text-[#817367]">
          <Star
            size={14}
            fill="currentColor"
            className="text-[#c58b36]"
          />
          {book.rating}
        </div>
      </div>
    </Link>
  );
}