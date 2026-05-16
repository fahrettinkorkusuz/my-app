'use client';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function Home() {
  useScrollReveal();
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-100 to-indigo-100 text-slate-900">
      <main className="mx-auto max-w-6xl px-6 py-16 pt-28">
        <section className="min-h-[70vh] grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-indigo-600 mb-4 animate-fade-in">
                İç Mimarlık & Çevre Tasarımı
              </p>
              <h1 className="text-5xl md:text-6xl font-semibold leading-tight text-slate-900 animate-fade-in-up">
                Tasarımın her detayında zarafeti, fonksiyonla birleştiren geleceğin mekânları inşa ediyorum.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 animate-fade-in-up animate-delay-1">
                Altınbaş Üniversitesi İç Mimarlık ve Çevre Tasarımı öğrencisiyim; mezun olana kadar projelerin her aşamasında yaratıcı ve analitik düşünerek fark yaratıyorum.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="/portfolyo"
                className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/10 transition hover:bg-indigo-700"
              >
                Portfolyomu Gör
              </a>
              <a
                href="/hakkimda"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Hakkımda
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full overflow-hidden rounded-[2rem] border border-indigo-100 bg-white/60 p-4 shadow-[0_10px_40px_rgba(99,102,241,0.1)] backdrop-blur-md transition-smooth hover-lift animate-slide-in-right">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/20 via-transparent to-purple-50/10" />
            <img
              src="/profile.webp"
              alt="Profil fotoğrafı"
              className="relative h-[28rem] w-full rounded-[1.75rem] object-cover"
            />
          </div>
        </section>

        <section className="mt-20 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-indigo-100 bg-white/80 p-10 shadow-[0_10px_40px_rgba(99,102,241,0.08)] backdrop-blur-md transition-smooth hover-lift animate-scale-in animate-delay-2">
            <h2 className="text-3xl font-semibold mb-6 text-slate-900">Eğitim</h2>
            <div className="space-y-4 text-slate-700 leading-8">
              <p>Altınbaş Üniversitesi İç Mimarlık ve Çevre Tasarımı öğrencisiyim. Eğitimimde modern tasarım prensipleri, mekan programlama ve çevresel duyarlılık üzerinde yoğunlaşıyorum.</p>
              <p>Kariyerime, detaylı proje çizimi ve saha uygulama süreçlerini birlikte yürüterek devam ediyorum.</p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-indigo-100 bg-gradient-to-br from-indigo-50/50 to-purple-50/30 p-10 shadow-[0_10px_40px_rgba(99,102,241,0.08)] backdrop-blur-md transition-smooth hover-lift animate-scale-in animate-delay-3">
            <h2 className="text-3xl font-semibold mb-6 text-slate-900">Deneyimler</h2>
            <div className="space-y-4 text-slate-700 leading-8">
              <p>KİPTAŞ konut projelerinde sahada uygulama süreçlerini takip ettim ve proje detaylarının gerçek yaşamla buluşma biçimini gözlemledim.</p>
              <p>Staj sürecinde 3B görselleştirme, iç mekân tasarımı ve malzeme seçimlerine odaklandım.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
