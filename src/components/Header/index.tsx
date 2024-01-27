import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <nav className="w-full h-20 bg-stblack text-white">
      <div className="container h-full flex items-center justify-between mx-auto">
        <Link href="/" className="relative">
          <Image
            src="/statista.svg"
            width={184}
            height={36}
            priority
            alt="Statista Logo"
            className="invert"
          />
        </Link>
        <ul className="text-xl capitalize" aria-label="menu">
          <li>
            <Link href="/favorites">Favorites</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
