import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="container mx-auto flex flex-col items-end mt-6 p-4">
      <hr className="w-full bg-black mb-3" />
      <Link
        href="https://github.com/saraahso/cc-statista"
        className="hover:animate-pulse"
        target="_blank">
        <Image
          src="/github-mark.svg"
          width={60}
          height={60}
          alt="Project GitHub Link"
        />
      </Link>
    </footer>
  );
}
