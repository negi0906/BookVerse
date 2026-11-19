
import { BookOpen, Feather, Clapperboard } from "lucide-react";

const features = [
  {
    title: "Discover",
    description:
      "Explore stories across genres, from timeless classics to modern favourites.",
    icon: BookOpen,
  },
  {
    title: "Explore",
    description:
      "Get to know the authors, their journeys and the stories behind their works.",
    icon: Feather,
  },
  {
    title: "Experience",
    description:
      "Discover books that have made their way from the pages to the screen.",
    icon: Clapperboard,
  },
];

export default function AboutFeatures() {
  return (
    <section className="bg-[#f0ebe1] py-20">

      <div className="mx-auto max-w-[1200px] px-6">

        <div className="mb-12 max-w-lg">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ad5035]">
            What we bring together
          </p>

          <h2 className="font-serif text-3xl text-[#392b25] md:text-4xl">
            More than just a collection of books.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="border-t border-[#d8cbb9] py-7"
              >
                <Icon
                  size={27}
                  strokeWidth={1.3}
                  className="mb-6 text-[#ad5035]"
                />

                <h3 className="font-serif text-xl text-[#392b25]">
                  {feature.title}
                </h3>

                <p className="mt-3 max-w-xs text-xs leading-6 text-[#817367]">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
