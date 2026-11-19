import { notFound } from "next/navigation";
import { books } from "@/lib/books";
import BookGrid from "@/components/categories/book-grid";
import CategoryBrowser from "@/components/categories/category-browser";

const categories = {
  fiction: {
    title: "Fiction",
    description: "Step into stories that spark imagination and curiosity.",
  },
  "non-fiction": {
    title: "Non-Fiction",
    description: "Explore real stories, ideas and perspectives.",
  },
};

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const categoryInfo =
    categories[category as keyof typeof categories];

  if (!categoryInfo) {
    notFound();
  }

  const categoryBooks = books.filter(
    (book) => book.category?.toLowerCase() === category
    );

  return (
    <main className="min-h-screen bg-[#faf7f2]">
      <div className="mx-auto max-w-[1200px] px-6 py-10">

        {/* Category Header */}
        <div className="mb-8">
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#ad5035]">
            Explore BookVerse
          </p>

          <h1 className="font-serif text-4xl text-[#392b25]">
            {categoryInfo.title}
          </h1>

          <p className="mt-2 text-sm text-[#817367]">
            {categoryInfo.description}
          </p>
        </div>

        <CategoryBrowser books={categoryBooks} />

      </div>
    </main>
  );
}