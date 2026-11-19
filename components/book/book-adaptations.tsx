import { Clapperboard, Tv } from "lucide-react";
import { books } from "@/lib/books";

type Book = (typeof books)[number];

export default function BookAdaptations({ book }: { book: Book }) {
  const adaptations = book.adaptations;

  return (
    <section className="border-b border-[#e9e1d6] py-8">

      {/* Heading */}
      <div className="mb-5">
        <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#ad5035]">
          From pages to screen
        </p>

        <h2 className="font-serif text-2xl text-[#392b25]">
          Book Adaptations
        </h2>

        <p className="mt-2 text-xs text-[#817367]">
          Stories that have made their way beyond the pages.
        </p>
      </div>

      {/* Check whether adaptations exist */}
      {adaptations.length > 0 ? (

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

          {adaptations.map((adaptation) => (
            <div
              key={adaptation.title}
              className="max-w-[250px] overflow-hidden rounded-lg border border-[#e9e1d6] bg-[#fffdf9]"
            >

              {/* Poster placeholder */}
              <div className="flex h-[120px] items-center justify-center bg-[#e9e1d6]">
                <div className="text-center">
                  <Clapperboard
                    size={35}
                    strokeWidth={1}
                    className="mx-auto mb-2 text-[#ad5035]"
                  />
                  <p className="font-serif text-lg text-[#392b25]">
                    {adaptation.title}
                  </p>
                </div>
              </div>

              {/* Adaptation details */}
              <div className="p-4">

                <h3 className="font-serif text-base text-[#392b25]">
                  {adaptation.title}
                </h3>

                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <span className="flex items-center gap-1 text-[9px] text-[#ad5035]">
                    {adaptation.type === "TV Series" ? (
                      <Tv size={12} />
                    ) : (
                      <Clapperboard size={12} />
                    )}
                    {adaptation.type}
                  </span>

                  <span className="text-[9px] text-[#948578]">
                    · {adaptation.year}
                  </span>
                </div>

                <p className="mt-3 text-[10px] text-[#817367]">
                  {adaptation.platform}
                </p>

              </div>
            </div>
          ))}

        </div>

      ) : (

        <div className="rounded-lg border border-dashed border-[#dfd5c8] p-8 text-center">
          <Clapperboard
            size={25}
            className="mx-auto mb-3 text-[#ad5035]"
          />

          <p className="font-serif text-base text-[#392b25]">
            No adaptations available yet.
          </p>

          <p className="mt-2 text-xs text-[#817367]">
            This story currently has no known film or television adaptation.
          </p>
        </div>

      )}

    </section>
  );
}
