
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="bg-[#ad5035] px-6 py-20">

      <div className="mx-auto flex max-w-[1200px] flex-col items-center text-center">

        <BookOpen
          size={35}
          strokeWidth={1}
          className="mb-6 text-[#f7e9da]"
        />

        <h2 className="max-w-xl font-serif text-3xl leading-snug text-white md:text-4xl">
          Your next favourite story is waiting.
        </h2>

        <p className="mt-4 max-w-md text-xs leading-6 text-[#f2dfd2]">
          Take a little time, explore a little more,
          and find a story worth remembering.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-3 rounded-sm bg-[#faf7f2] px-6 py-3 text-xs font-medium text-[#ad5035] transition hover:bg-white"
        >
          Explore Books
          <ArrowRight size={15} />
        </Link>

      </div>

    </section>
  );
}
