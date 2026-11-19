import Link from "next/link";
import Image from "next/image";
import ProfileSidebar from "./profile-sidebar";

export default function Navbar() {
    return (
        <nav className="h-[59px] w-full border-b border-[#e6ddd1] bg-[#faf7f2]">
            <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6">
                
                {/* Logo */}
                <Link href={"/"} className="flex items-center">
                    <Image
                        src={"/BookVerse_logo.png"}
                        alt="BookVerse"
                        width={120}
                        height={35}
                        className="h-auto w-[120px]"
                     />
                </Link>

                {/* Navigation Links */}
                <div className="flex items-center gap-8 text-[11px] text-[#382a24]">
                    <Link href={"/"} className="relative  hover:text-[#b64f32]">
                        Home
                        {/* <span className="absolute -bottom-2 left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-[#b64f32]" /> */}
                    </Link>

                    <Link href={"/#categories"} className="hover:text-[#b64f32]">Categories</Link>

                    <Link href={"/about"} className="hover:text-[#b64f32]">About</Link>

                    {/* <div className="h-5 w-px bg-[#e6ddd1]" /> */}

                    <Link href={"/search"} className="hover:text-[#b64f32]">
                        | &nbsp; Search
                    </Link>

                    <ProfileSidebar />
                </div>
            </div>
        </nav>
    );
}