import Link from 'next/link';

export default function NavBar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/90 bg-white/95 backdrop-blur-xl shadow-sm">
      <div className="relative mx-auto flex max-w-6xl items-center px-6 py-4">
        <Link href="/" className="text-lg font-semibold text-slate-900">
          Portfolyo
        </Link>
        <nav className="absolute inset-x-0 mx-auto flex w-max items-center gap-6 text-sm font-medium text-slate-700">
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
