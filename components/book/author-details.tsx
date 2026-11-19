
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Feather } from "lucide-react";
import { books } from "@/lib/books";

type Book = (typeof books)[number];

export default function AuthorDetails({ book }: { book: Book }) {
  const author = book.authorDetails;

  return (
    <section className="border-b border-[#e9e1d6] py-8">

      {/* Heading */}
      <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#ad5035]">
        About the author
      </p>

      <div className="flex flex-col gap-5 sm:flex-row">

        {/* Author image */}
        <div className="shrink-0">
          <Image
            src={author.image}
            alt={author.name}
            width={90}
            height={90}
            className="h-20 w-20 rounded-full border border-[#e9e1d6] object-cover"
          />
        </div>

        {/* Author information */}
        <div className="flex-1">

          <h2 className="font-serif text-2xl text-[#392b25]">
            {author.name}
          </h2>

          <p className="mt-1 text-[10px] text-[#ad5035]">
            {author.nationality} author
          </p>

          <p className="mt-3 text-xs leading-6 text-[#817367]">
            {author.biography}
          </p>

          {/* Explore author */}
          <Link
            href={`/authors/${author.name.toLowerCase().replaceAll(" ", "-")}`}
            className="mt-4 inline-flex items-center gap-2 text-[10px] font-medium text-[#ad5035] hover:underline"
          >
            View author profile
            <ArrowRight size={13} />
          </Link>

        </div>

      </div>

    </section>
  );
}
