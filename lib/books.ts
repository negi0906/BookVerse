
export const books = [
  {
    slug: "the-night-garden",
    title: "The Night Garden",
    author: "Elena Marlowe",
    category: "Fiction",
    genre: ["Fantasy", "Mystery"],
    rating: 4.8,
    totalReviews: 248,
    description:
      "In a forgotten corner of the city, a garden blooms only at midnight. When botanist Mara Vale discovers its gate, she enters a world where memory takes root and every flower holds a story someone has tried to forget.",
    publishedDate: "May 14, 2024",
    pages: 320,
    language: "English",
    publisher: "Bloomsbury",
    cover: "/books/the-night-garden.jpg",

    authorDetails: {
      name: "Elena Marlowe",
      nationality: "British",
      biography:
        "Elena Marlowe is an award-winning author of six novels. Her work has been translated into twenty-three languages and explores the boundaries between reality and imagination.",
      image: "/authors/elena-marlowe.jpg",
    },

    adaptations: [
      {
        title: "The Night Garden",
        type: "TV Series",
        year: 2026,
        platform: "Coming Soon",
      },
    ],

    purchaseSources: [
      {
        store: "Amazon",
        format: "Paperback",
        price: "₹399",
        url: "#",
      },
      {
        store: "Bookswagon",
        format: "Hardcover",
        price: "₹599",
        url: "#",
      },
      {
        store: "Kindle",
        format: "E-book",
        price: "₹199",
        url: "#",
      },
    ],

    recommendedBooks: [
      {
        slug: "book-two",
        title: "The Silent Patient",
        author: "Alex Michaelides",
        cover: "/books/the-silent-patient.jpg",
        rating: 4.5,
      },
      {
        slug: "book-three",
        title: "The Midnight Library",
        author: "Matt Haig",
        cover: "/books/the-midnight-library.jpg",
        rating: 4.4,
      },
      {
        slug: "book-four",
        title: "The Shadow of the Wind",
        author: "Carlos Ruiz Zafón",
        cover: "/books/the-shadow-of-the-wind.jpg",
        rating: 4.6,
      },
      {
        slug: "book-five",
        title: "The Book Thief",
        author: "Markus Zusak",
        cover: "/books/the-book-thief.jpg",
        rating: 4.7,
      },
      {
        slug: "book-six",
        title: "Before the Coffee Gets Cold",
        author: "Toshikazu Kawaguchi",
        cover: "/books/before-the-coffee-gets-cold.jpg",
        rating: 4.3,
      },
    ],
  },
  {
    slug: "atomic-habits",
    title: "Atomic Habits",
    author: "James Clear",
    category: "Non-Fiction",
    genre: ["Self-Help"],
    rating: 4.8,
    totalReviews: 500,
    description: "A book about building good habits.",
    publishedDate: "October 16, 2018",
    pages: 320,
    language: "English",
    publisher: "Penguin",
    cover: "/books/non-fiction/self-help/atomic-habits.jpg",

    authorDetails: {
      name: "James Clear",
      nationality: "American",
      biography: "James Clear writes about habits and personal improvement.",
      image: "/authors/james-clear.jpg",
    },

    adaptations: [],
    purchaseSources: [],
    recommendedBooks: [],
  }
];
