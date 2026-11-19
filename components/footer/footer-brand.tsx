
import Link from "next/link";
import { BookOpen } from "lucide-react";

export default function FooterBrand() {
  return (
    <div className="flex flex-col gap-2">
      <Link href="/" className="flex items-center gap-2">
        <BookOpen
          size={17}
          strokeWidth={1.5}
          className="text-[#b45336]"
        />

        <span className="font-serif text-lg font-semibold text-[#392b25]">
          BookVerse
        </span>
      </Link>

      <p className="text-[10px] text-[#8b7b6c]">
        For the love of a good story.
      </p>
    </div>
  );
}
