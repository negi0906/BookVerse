
import Image from "next/image";
import Link from "next/link";

interface Category {
  name: string;
  image: string;
  count: string;
  href: string;
}

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={category.href}
      className="group relative h-[145px] overflow-hidden rounded-lg"
    >
      {/* Background image */}
      <Image
        src={category.image}
        alt={category.name}
        fill
        sizes="(max-width: 640px) 50vw, 200px"
        className="object-cover transition duration-500 group-hover:scale-110"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

      {/* Category details */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-3 text-white">

        <div>
          <h3 className="font-serif text-sm">
            {category.name}
          </h3>

          <p className="mt-1 text-[8px] text-white/80">
            {category.count}
          </p>
        </div>

        <span className="text-xs transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
          ↗
        </span>

      </div>
    </Link>
  );
}
