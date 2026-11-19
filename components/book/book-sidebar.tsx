import Link from "next/link";
import { ExternalLink, ShoppingBag, Star } from "lucide-react";

type SidebarBook = {
  slug: string;
  title: string;
  author: string;
  cover: string;
  rating: number;
};

type PurchaseSource = {
  store: string;
  format: string;
  price: string;
  url: string;
};

type BookSidebarProps = {
  purchaseSources: PurchaseSource[];
  recommendedBooks: SidebarBook[];
};

export default function BookSidebar({
  purchaseSources,
  recommendedBooks,
}: BookSidebarProps) {
  return (
    <aside className="space-y-10">
      {/* Purchase Options */}
      <section>
        <div className="mb-5 flex items-center gap-2">
          <ShoppingBag size={19} className="text-[#ad5035]" />
          <h2 className="font-serif text-2xl text-[#392b25]">
            Where to Buy
          </h2>
        </div>

        <div className="space-y-3">
          {purchaseSources.map((source, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-3 rounded-xl border border-[#e9e1d6] bg-white p-4"
            >
              <div>
                <h3 className="font-medium text-[#392b25]">
                  {source.store}
                </h3>
                <p className="mt-1 text-xs text-[#817367]">
                  {source.format}
                </p>
              </div>

              <div className="text-right">
                <p className="mb-2 font-medium text-[#392b25]">
                  {source.price}
                </p>

                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-[#ad5035] hover:underline"
                >
                  Buy <ExternalLink size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommendations */}
      <section>
        <h2 className="mb-5 font-serif text-2xl text-[#392b25]">
          You May Also Like
        </h2>

        <div className="space-y-4">
          {recommendedBooks.slice(0, 5).map((book) => (
            <Link
              href={`/books/${book.slug}`}
              key={book.slug}
              className="flex gap-4 rounded-xl border border-[#e9e1d6] bg-white p-3 transition hover:border-[#ad5035]"
            >
              <div className="flex h-24 w-16 shrink-0 items-center justify-center rounded bg-[#f0ebe1] text-xs text-[#817367]">
                Cover
              </div>

              <div className="min-w-0">
                <h3 className="line-clamp-2 font-medium text-[#392b25]">
                  {book.title}
                </h3>

                <p className="mt-1 text-sm text-[#817367]">
                  {book.author}
                </p>

                <p className="mt-2 flex items-center gap-1 text-xs text-[#817367]">
                  <Star
                    size={13}
                    fill="currentColor"
                    className="text-[#c58b36]"
                  />
                  {book.rating}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </aside>
  );
}