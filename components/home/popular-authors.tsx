
import Link from "next/link";
import AuthorCard from "./author-card";

const authors = [
  {
    name: "Sally Rooney",
    image: "/authors/sally-rooney.jpg",
    description: "Irish novelist · Contemporary fiction",
    bio: "Intimate stories of love, class and the things we leave unsaid.",
    books: ["Normal People", "Beautiful World"],
  },
  {
    name: "Matt Haig",
    image: "/authors/matt-haig.jpg",
    description: "British author · Fiction & wellbeing",
    bio: "Finding a little hope in the extraordinary business of being human.",
    books: ["The Midnight Library", "The Life"],
  },
  {
    name: "Taylor Jenkins Reid",
    image: "/authors/taylor-reid.jpg",
    description: "American novelist · Historical fiction",
    bio: "Unforgettable women, complicated lives, and a touch of Hollywood.",
    books: ["Seven Husbands", "Malibu Rising"],
  },
];

export default function PopularAuthors() {
  return (
    <section className="bg-[#f0ebe1] py-10">

      <div className="mx-auto max-w-[1200px] px-6">

        {/* Heading */}
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="font-serif text-2xl text-[#392b25]">
              Popular Authors
            </h2>

            <p className="mt-1 text-[10px] text-[#948578]">
              Meet the minds behind your next favourite story.
            </p>
          </div>

          <Link
            href="/authors"
            className="text-[10px] text-[#ad5035] hover:underline"
          >
            See all →
          </Link>
        </div>

        {/* Author cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

          {authors.map((author) => (
            <AuthorCard
              key={author.name}
              author={author}
            />
          ))}

        </div>

      </div>

    </section>
  );
}
