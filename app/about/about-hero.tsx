
import { BookOpen } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="bg-[#faf7f2]">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-6 py-20 md:grid-cols-2 md:py-28">

        {/* Text */}
        <div>
          <p className="mb-6 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ad5035]">
            <span className="h-px w-7 bg-[#ad5035]" />
            A little about us
          </p>

          <h1 className="max-w-lg font-serif text-5xl leading-[1.15] text-[#392b25] md:text-6xl">
            A world between the pages.
          </h1>

          <p className="mt-7 max-w-md text-sm leading-7 text-[#817367]">
            BookVerse is a space for curious readers, passionate
            storytellers and everyone who believes that a good
            book can take you somewhere extraordinary.
          </p>

          <p className="mt-4 max-w-md text-sm leading-7 text-[#817367]">
            From timeless classics to contemporary fiction,
            we bring stories, authors and literary discoveries
            together in one place.
          </p>
        </div>

        {/* Decorative illustration */}
        <div className="relative flex h-[300px] items-center justify-center">

          <div className="absolute h-64 w-64 rounded-full bg-[#eee8dc]" />

          <div className="relative flex items-center justify-center">

            <div className="absolute -left-16 top-12 h-32 w-24 rotate-[-12deg] rounded-sm border border-[#d8c5ad] bg-[#c17a55] shadow-lg" />

            <div className="relative z-10 flex h-48 w-36 rotate-[3deg] flex-col items-center justify-center rounded-sm border border-[#d8c5ad] bg-[#fffaf0] shadow-xl">
              <BookOpen
                size={65}
                strokeWidth={1}
                className="text-[#ad5035]"
              />

              <span className="mt-5 font-serif text-lg text-[#392b25]">
                BookVerse
              </span>

              <span className="mt-1 text-[7px] uppercase tracking-widest text-[#948578]">
                Stories worth keeping
              </span>
            </div>

            <div className="absolute -right-14 bottom-8 h-32 w-24 rotate-[12deg] rounded-sm border border-[#d8c5ad] bg-[#d8d0b8] shadow-lg" />

          </div>
        </div>

      </div>
    </section>
  );
}
