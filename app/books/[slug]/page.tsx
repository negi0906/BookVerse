
import { notFound } from "next/navigation";
import { books } from "@/lib/books";
import BookHero from "@/components/book/book-hero";
import BookDescription from "@/components/book/book-desription";
import AuthorDetails from "@/components/book/author-details";
import BookAdaptations from "@/components/book/book-adaptations";
import BookReviews from "@/components/book/book-reviews";
import BookSidebar from "@/components/book/book-sidebar";
import BookDiscussion from "@/components/book/book-discussion";

export default async function BookPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const book = books.find((item) => item.slug === slug);

  if (!book) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#faf7f2]">

      {/* Section 1: Book introduction */}
      <BookHero book={book} />

        <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 px-6 py-10 lg:grid-cols-[1fr_320px]">
            <div className="min-w-0">
                <BookDescription book={book} />
                <AuthorDetails book={book} />
                <BookAdaptations book={book} />
                <BookReviews book={book} />
            </div>

            <div>
                <BookSidebar
                purchaseSources={book.purchaseSources}
                recommendedBooks={book.recommendedBooks}
                />
            </div>
        </div>
        <BookDiscussion />

    </main>
  );
}
