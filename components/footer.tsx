
import FooterBrand from "./footer/footer-brand";
import Newsletter from "./footer/newsletter";
import FooterLinks from "./footer/footer-links";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#e7ded3] bg-[#faf7f2]">

      {/* Main footer */}
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 px-6 py-8 md:grid-cols-3 md:items-center">

        <FooterBrand />

        <div className="md:justify-self-center">
          <Newsletter />
        </div>

        <div className="md:justify-self-end">
          <FooterLinks />
        </div>

      </div>

      {/* Bottom footer */}
      <div className="mx-auto flex max-w-[1200px] flex-col gap-3 border-t border-[#e7ded3] px-6 py-4 text-[9px] text-[#958679] sm:flex-row sm:items-center sm:justify-between">

        <p>
          © 2026 BookVerse. A home for curious readers.
        </p>

        <div className="flex gap-5">
          <Link href="/privacy" className="hover:text-[#ad5035]">
            Privacy policy
          </Link>

          <Link href="/terms" className="hover:text-[#ad5035]">
            Terms of use
          </Link>
        </div>

      </div>

      {/* Bottom dark strip */}
      <div className="h-1.5 bg-[#30251f]" />

    </footer>
  );
}

