import { notFound } from "next/navigation";
import { books } from "@/lib/books";
import BookGrid from "@/components/categories/book-grid";

const genreDetails: Record<
  string,
  { title: string; description: string }
> = {
  horror: {
    title: "Horror",
    description: "Stories that send chills down your spine.",
  },
  mystery: {
    title: "Mystery",
    description: "Uncover secrets and solve the unexpected.",
  },
  romance: {
    title: "Romance",
    description: "Stories of love, relationships and emotions.",
  },
  "self-help": {
    title: "Self Help",
    description: "Discover ideas to grow and improve yourself.",
  },
  history: {
    title: "History",
    description: "Explore the events that shaped our world.",
  },
  biography: {
    title: "Biography",
    description: "Discover the lives and journeys of remarkable people.",
  },
  fantasy: {
    title: "Fantasy",
    description: "Enter worlds beyond imagination.",
  },
  thriller: {
    title: "Thriller",
    description: "Discover gripping stories full of suspense.",
  },
  "sci-fi": {
    title: "Science Fiction",
    description: "Explore futuristic worlds and possibilities.",
  },
};

export default async function GenrePage({
  params,
}: {
  params: Promise<{ genre: string }>;
}) {
  const { genre } = await params;

  const info = genreDetails[genre];

  if (!info) notFound();

  const genreBooks = books.filter((book) =>
    book.genre?.some(
      (item) => item.toLowerCase() === genre
    )
  );

  return (
    <main className="min-h-screen bg-[#faf7f2]">
      <div className="mx-auto max-w-[1200px] px-6 py-10">

        <div className="mb-8">
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#ad5035]">
            Explore BookVerse
          </p>

          <h1 className="font-serif text-4xl text-[#392b25]">
            {info.title}
          </h1>

          <p className="mt-2 text-sm text-[#817367]">
            {info.description}
          </p>
        </div>

        <p className="mb-5 text-sm text-[#817367]">
          {genreBooks.length} books
        </p>

        <BookGrid books={genreBooks} />

      </div>
    </main>
  );
}