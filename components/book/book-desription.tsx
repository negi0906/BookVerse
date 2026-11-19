
"use client";

import { useState } from "react";
import { BookOpen, Sparkles } from "lucide-react";
import { books } from "@/lib/books";

type Book = (typeof books)[number];

export default function BookDescription({ book }: { book: Book }) {
  const [expanded, setExpanded] = useState(false);

  const fullDescription =
    `${book.description} As the story unfolds, hidden connections begin to emerge, revealing how the past shapes the present. Every discovery brings new questions about memory, identity and the choices that define us.`;

  const themes = [
    "Memory and identity",
    "Mystery and discovery",
    "Magic and imagination",
  ];

  return (
    <section className="border-b border-[#e9e1d6] py-8">

      {/* Heading */}
      <div className="mb-5 flex items-center gap-2">
        <BookOpen size={19} className="text-[#ad5035]" />

        <h2 className="font-serif text-2xl text-[#392b25]">
          About the Book
        </h2>
      </div>

      {/* Description */}
      <div>
        <p className="text-sm leading-7 text-[#817367]">
          {expanded
            ? fullDescription
            : book.description}
        </p>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 text-xs font-medium text-[#ad5035] hover:underline"
        >
          {expanded ? "Read Less ↑" : "Read More ↓"}
        </button>
      </div>

      {/* Themes */}
      <div className="mt-8">
        <h3 className="mb-4 flex items-center gap-2 font-serif text-lg text-[#392b25]">
          <Sparkles size={16} className="text-[#ad5035]" />
          Themes explored
        </h3>

        <div className="flex flex-wrap gap-2">
          {themes.map((theme) => (
            <span
              key={theme}
              className="rounded-sm border border-[#e9e1d6] bg-[#f0ebe1] px-3 py-2 text-[10px] text-[#817367]"
            >
              {theme}
            </span>
          ))}
        </div>
      </div>

      {/* Book facts */}
      <div className="mt-8 border-t border-[#e9e1d6] pt-6">
        <h3 className="mb-4 font-serif text-lg text-[#392b25]">
          Book details
        </h3>

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
          {[
            { label: "Genre", value: book.genre.join(", ") },
            { label: "Publication", value: book.publishedDate },
            { label: "Pages", value: book.pages },
            { label: "Language", value: book.language },
            { label: "Publisher", value: book.publisher },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-[9px] uppercase tracking-widest text-[#ad5035]">
                {item.label}
              </p>

              <p className="mt-2 text-xs text-[#392b25]">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
