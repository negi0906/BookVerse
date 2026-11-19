
import Link from "next/link";

const footerLinks = [
  { label: "About us", href: "/about" },
  { label: "Our journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

export default function FooterLinks() {
  return (
    <nav className="flex items-center gap-5">
      {footerLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="text-[9px] text-[#594a40] transition hover:text-[#ad5035]"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
