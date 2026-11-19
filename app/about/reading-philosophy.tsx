
import { Quote } from "lucide-react";

export default function ReadingPhilosophy() {
  return (
    <section className="bg-[#faf7f2] px-6 py-24">

      <div className="mx-auto max-w-3xl text-center">

        <Quote
          size={30}
          strokeWidth={1}
          className="mx-auto mb-8 text-[#ad5035]"
        />

        <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ad5035]">
          A thought we believe in
        </p>

        <h2 className="font-serif text-3xl leading-relaxed text-[#392b25] md:text-4xl">
          Every reader has a different kind of story.
        </h2>

        <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[#817367]">
          Some find comfort in familiar pages, some chase
          mysteries, and others travel through worlds that
          exist only in imagination.

          We believe there's a story for every mood,
          every moment and every reader.
        </p>

        <div className="mx-auto mt-9 h-px w-12 bg-[#ad5035]" />

      </div>

    </section>
  );
}
