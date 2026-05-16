export default function IletisimPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-100 to-indigo-100 text-slate-900 pt-28 pb-16">
      <main className="mx-auto max-w-5xl px-6 py-16">
        <section className="rounded-[2rem] border border-indigo-100 bg-white/90 p-10 shadow-[0_10px_40px_rgba(99,102,241,0.08)] backdrop-blur-md">
          <h1 className="text-4xl font-semibold mb-6 text-slate-900">İletişim</h1>
          <p className="text-lg leading-8 text-slate-700 mb-8">Projelerim hakkında konuşmak veya birlikte yeni çalışmalar üretmek isterseniz, aşağıdaki kanallardan bana ulaşabilirsiniz.</p>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-[1.75rem] border border-slate-200 bg-indigo-50/80 p-6">
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">E-posta</h2>
              <p className="text-slate-700">Omerfazlioglu05@gmail.com</p>
            </div>
            <div className="rounded-[1.75rem] border border-slate-200 bg-purple-50/80 p-6">
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">Sosyal</h2>
              <div className="space-y-2 text-slate-700">
                <p>
                  <a href="https://www.linkedin.com/in/omerfazlioglu/" target="_blank" rel="noreferrer" className="font-medium text-indigo-700 hover:text-indigo-900">
                    LinkedIn
                  </a>
                </p>
                <p>
                  <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="font-medium text-indigo-700 hover:text-indigo-900">
                    Instagram
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
