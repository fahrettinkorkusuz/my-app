import Link from 'next/link';
import Image from "next/image"
export default function NavBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/90 bg-white/95 backdrop-blur-xl shadow-sm">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-4 px-6 py-4">
        <Link href="/">
 <Image 
  src="/logo.jpeg" 
  alt="Logo" 
  width={48}
  height={48}
  className="object-contain"
/>
</Link>
        <nav className="flex flex-wrap justify-between gap-4 text-sm font-medium text-slate-700">
          <Link href="/" className="transition hover:text-indigo-600">
            Anasayfa
          </Link>
          <Link href="/hakkimda" className="transition hover:text-indigo-600">
            Hakkımda
          </Link>
          <Link href="/portfolyo" className="transition hover:text-indigo-600">
            Portfolyo
          </Link>
          <Link href="/iletisim" className="transition hover:text-indigo-600">
            İletişim
          </Link>
        </nav>
      </div>
    </header>
  );
}
