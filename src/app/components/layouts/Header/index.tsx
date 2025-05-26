import Image from "next/image";
import Link from "next/link";
import Button from "../../elements/Button";
import { Bookmark as BookmarkIcon } from "react-feather";

export default function Header() {
  return (
    <header className="flex items-center justify-between max-w-5xl mx-auto px-4 py-6">
      <h3 className="text-2xl tracking-wide font-bold uppercase cursor-pointer">
        <Image src="/anilist-logo.png" width={50} height={50} alt="Anilist Logo" />
      </h3>
      <nav className="flex space-x-4">
        <Button>
          <Link
            href="/bookmarks"
            className="flex gap-2 flex-shrink-0 cursor-pointer"
          >
            <BookmarkIcon
              size={24}
              className="text-white"
            />
            <span>Bookmark List</span>
          </Link>
        </Button>
      </nav>
    </header>
  )
}