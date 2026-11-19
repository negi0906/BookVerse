"use client";

import { useState } from "react";
import Link from "next/link";
import {
  UserRound,
  Bookmark,
  Star,
  LogOut,
  X,
  ChevronRight,
} from "lucide-react";

const menuItems = [
  {
    label: "My Wishlist",
    href: "/wishlist",
    icon: Bookmark,
  },
  {
    label: "My Reviews",
    href: "/my-reviews",
    icon: Star,
  },
];

export default function ProfileSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Profile Trigger */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open profile menu"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f0ebe1] text-[#392b25] hover:bg-[#e9e1d6]"
      >
        <UserRound size={20} />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 bg-black/30"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-[320px] max-w-[85vw] flex-col bg-[#faf7f2] shadow-xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#e9e1d6] p-6">
          <h2 className="font-serif text-2xl text-[#392b25]">
            My Account
          </h2>

          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close sidebar"
            className="rounded-full p-2 text-[#817367] hover:bg-[#f0ebe1]"
          >
            <X size={20} />
          </button>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-3 border-b border-[#e9e1d6] p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#e9e1d6] text-[#392b25]">
                <UserRound size={24} />
            </div>

            <div className="min-w-0">
                <p className="truncate font-medium text-[#392b25]">
                Username
                </p>
                <p className="truncate text-sm text-[#817367]">
                user@email.com
                </p>
            </div>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 space-y-2 p-4">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between rounded-lg px-4 py-3 text-[#392b25] transition hover:bg-[#f0ebe1]"
              >
                <span className="flex items-center gap-3">
                  <Icon size={19} className="text-[#817367]" />
                  <span className="text-sm">{item.label}</span>
                </span>

                <ChevronRight
                  size={16}
                  className="text-[#a69a8d]"
                />
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="border-t border-[#e9e1d6] p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm text-[#ad5035] hover:bg-[#f0ebe1]"
          >
            <LogOut size={19} />
            Log Out
          </button>
        </div>
      </aside>
    </>
  );
}