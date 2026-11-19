"use client";

import { Star, PenLine } from "lucide-react";

type Review = {
  id: number;
  userId: string;
  name: string;
  date: string;
  rating: number;
  title: string;
  comment: string;
};

const currentUserId = "current-user";

const reviews: Review[] = [
  {
    id: 1,
    userId: "user-1",
    name: "Aarav Sharma",
    date: "2026-10-20",
    rating: 4,
    title: "A beautiful read",
    comment:
      "The writing is beautiful, and the story keeps you interested throughout. I especially loved the atmosphere.",
  },
  {
    id: 2,
    userId: "current-user",
    name: "You",
    date: "2026-10-25",
    rating: 5,
    title: "Couldn't put it down!",
    comment:
      "An absolutely wonderful story. The characters and the world-building made this such an enjoyable experience.",
  },
  {
    id: 3,
    userId: "user-2",
    name: "Meera Kapoor",
    date: "2026-10-18",
    rating: 5,
    title: "Worth reading",
    comment:
      "A captivating story with interesting characters. Definitely one I would recommend.",
  },
];

const ratingDistribution = [
  { stars: 5, percentage: 75 },
  { stars: 4, percentage: 18 },
  { stars: 3, percentage: 5 },
  { stars: 2, percentage: 1 },
  { stars: 1, percentage: 1 },
];

export default function BookReviews({
  book,
}: {
  book: {
    rating: number;
    totalReviews: number;
  };
}) {
  const sortedReviews = [...reviews].sort((a, b) => {
    if (a.userId === currentUserId) return -1;
    if (b.userId === currentUserId) return 1;

    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <section className="border-t border-[#e9e1d6] py-8">
      <div className="mb-5">
        <p className="mb-2 text-sm uppercase tracking-[0.2em] text-[#ad5035]">
          Reader Reviews
        </p>

        <h2 className="font-serif text-3xl text-[#392b25]">
          What Readers Think
        </h2>
      </div>

      {/* Rating Summary */}
      <div className="mb-6 grid gap-5 rounded-2xl border border-[#e9e1d6] bg-white p-4 md:grid-cols-2">
        <div>
          <div className="flex items-center gap-3">
            <span className="font-serif text-5xl text-[#392b25]">
              {book.rating}
            </span>

            <div>
              <div className="flex text-[#c58b36]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={16}
                    fill={index < Math.round(book.rating) ? "currentColor" : "none"}
                  />
                ))}
              </div>

              <p className="mt-1 text-sm text-[#817367]">
                {book.totalReviews} reviews
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          {ratingDistribution.map((item) => (
            <div key={item.stars} className="flex items-center gap-3">
              <span className="w-8 text-sm text-[#817367]">
                {item.stars} ★
              </span>

              <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#f0ebe1]">
                <div
                  className="h-full rounded-full bg-[#ad5035]"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Write Review */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
        <h3 className="font-serif text-xl text-[#392b25]">
          Reader Experiences
        </h3>

        <button className="flex items-center gap-2 rounded-full bg-[#392b25] px-5 py-3 text-sm text-white transition hover:bg-[#ad5035]">
          <PenLine size={16} />
          Write a Review
        </button>
      </div>

      {/* Review Cards */}
      <div className="space-y-3">
        {sortedReviews.map((review) => (
          <article
            key={review.id}
            className="rounded-xl border border-[#e9e1d6] bg-white p-4"
          >
            <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-medium text-[#392b25]">
                    {review.name}
                  </h4>

                  {review.userId === currentUserId && (
                    <span className="rounded-full bg-[#f0ebe1] px-3 py-1 text-xs text-[#ad5035]">
                      Your review
                    </span>
                  )}
                </div>

                <p className="mt-1 text-xs text-[#817367]">
                  {new Date(review.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>

              <div className="flex text-[#c58b36]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={14}
                    fill={index < review.rating ? "currentColor" : "none"}
                  />
                ))}
              </div>
            </div>

            <h5 className="mb-2 font-medium text-[#392b25]">
              {review.title}
            </h5>

            <p className="text-sm leading-7 text-[#817367]">
              {review.comment}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}