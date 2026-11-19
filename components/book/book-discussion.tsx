"use client";

import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";

type Comment = {
  id: number;
  name: string;
  date: string;
  message: string;
  replies: number;
};

const initialComments: Comment[] = [
  {
    id: 1,
    name: "Aarav Sharma",
    date: "October 25, 2026",
    message:
      "What do you think the garden represents in the story? I feel it has something to do with forgotten memories.",
    replies: 3,
  },
  {
    id: 2,
    name: "Meera Kapoor",
    date: "October 23, 2026",
    message:
      "The ending was so unexpected! Did anyone else notice the symbolism in the final chapter?",
    replies: 5,
  },
];

export default function BookDiscussion() {
  const [comments, setComments] = useState(initialComments);
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!message.trim()) return;

    const newComment: Comment = {
      id: Date.now(),
      name: "You",
      date: new Date().toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      message: message.trim(),
      replies: 0,
    };

    setComments((previous) => [newComment, ...previous]);
    setMessage("");
  }

  return (
    <section
      id="discussion"
      className="border-t border-[#e9e1d6] py-8"
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-5">
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-[#ad5035]">
            Community
          </p>

          <h2 className="font-serif text-3xl text-[#392b25]">
            Book Discussion
          </h2>

          <p className="mt-2 text-sm text-[#817367]">
            Share your thoughts, questions and theories with other readers.
          </p>
        </div>

        {/* Comment Input */}
        <form onSubmit={handleSubmit} className="mb-6">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Start a conversation about this book..."
            rows={4}
            className="w-full resize-none rounded-xl border border-[#e9e1d6] bg-white p-4 text-sm text-[#392b25] outline-none placeholder:text-[#a69a8d] focus:border-[#ad5035]"
          />

          <div className="mt-3 flex justify-end">
            <button
              type="submit"
              disabled={!message.trim()}
              className="flex items-center gap-2 rounded-full bg-[#392b25] px-6 py-3 text-sm text-white transition hover:bg-[#ad5035] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Send size={15} />
              Post Discussion
            </button>
          </div>
        </form>

        {/* Discussion Threads */}
        <div className="space-y-5">
          {comments.map((comment) => (
            <article
              key={comment.id}
              className="rounded-xl border border-[#e9e1d6] bg-white p-4"
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <div>
                  <h3 className="font-medium text-[#392b25]">
                    {comment.name}
                  </h3>

                  <p className="mt-1 text-xs text-[#817367]">
                    {comment.date}
                  </p>
                </div>

                <MessageCircle
                  size={18}
                  className="text-[#ad5035]"
                />
              </div>

              <p className="text-sm leading-7 text-[#817367]">
                {comment.message}
              </p>

              <button
                type="button"
                className="mt-4 text-xs font-medium text-[#ad5035] hover:underline"
              >
                {comment.replies} replies
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}