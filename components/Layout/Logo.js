import Link from 'next/link';
export default function Logo({ className = 'md:mr-2' }) {
  return (
    <Link href="/">
      <a
        className={`font-mono font-bold text-2xl text-green-400 mb-4 md:mb-0 ${className}`}
      >
        kodcoach
      </a>
    </Link>
  );
}
