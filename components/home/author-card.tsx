
import Image from "next/image";
import Link from "next/link";

interface Author {
  name: string;
  image: string;
  description: string;
  bio: string;
  books: string[];
}

interface AuthorCardProps {
  author: Author;
}

export default function AuthorCard({ author }: AuthorCardProps) {
  return (
    <div className="rounded-xl bg-[#fffdf9] p-4">

      {/* Author profile */}
      <div className="flex items-center gap-3">

        <Image
          src={author.image}
          alt={author.name}
          width={48}
          height={48}
          className="h-12 w-12 rounded-full object-cover"
        />

        <div>
          <h3 className="font-serif text-base text-[#392b25]">
            {author.name}
          </h3>

          <p className="mt-1 text-[8px] text-[#948578]">
            {author.description}
          </p>
        </div>

      </div>

      {/* Author bio */}
      <p className="my-4 min-h-8 text-[10px] leading-5 text-[#948578]">
        {author.bio}
      </p>

      {/* Books and link */}
      <div className="flex items-end justify-between">

        <div className="flex gap-2">
          {author.books.map((book) => (
            <div
              key={book}
              className="flex h-[60px] w-[35px] items-center justify-center rounded-sm bg-[#eee9df] text-center shadow-md"
            >
              <span className="px-1 font-serif text-[6px] text-[#392b25]">
                {book}
              </span>
            </div>
          ))}
        </div>

        <Link
          href="/authors"
          className="mb-1 text-[9px] text-[#ad5035] hover:underline"
        >
          Explore books →
        </Link>

      </div>

    </div>
  );
}
