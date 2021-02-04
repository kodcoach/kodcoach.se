import Link from 'next/link';
export default function Logo({ className = 'md:mr-2' }) {
  return (
    <Link href="/">
      <a
        className={`font-mono font-bold text-xl text-white uppercase mb-4 md:mb-0 ${className}`}
      >
        <span className="text-indigo-600">Kod</span>Coach
      </a>
    </Link>
  );
}
