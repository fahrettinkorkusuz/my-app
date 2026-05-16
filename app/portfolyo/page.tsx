'use client';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function PortfolyoPage() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-100 to-indigo-100 text-slate-900 pt-28 pb-16">
      <main className="mx-auto max-w-6xl px-6 py-16">
        <section className="space-y-10">
          <div className="rounded-[2rem] border border-indigo-100 bg-white/90 p-10 shadow-[0_10px_40px_rgba(99,102,241,0.08)] backdrop-blur-md">
            <h1 className="text-4xl font-semibold mb-4 text-slate-900">Portfolyo</h1>
            <p className="text-slate-700 leading-8">Bu sayfada yalnızca portfolyomu bulabilirsiniz. Her çalışma, tasarım yaklaşımımı ve mekân çözümleme sürecimi yansıtıyor.</p>
          </div>

          <div className="grid gap-8">
            <article className="rounded-[2rem] border border-indigo-100 bg-white/80 p-8 shadow-[0_10px_40px_rgba(99,102,241,0.08)] backdrop-blur-md animate-scale-in">
              <span className="inline-flex rounded-full bg-indigo-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-indigo-700">Final Projesi</span>
              <h2 className="mt-6 text-2xl font-bold text-slate-900">Kairo | Restaurant Design</h2>
              <p className="mt-4 text-slate-700 leading-8">Modern Japon mutfak konseptini restoran iç mekânına uyguladığım bu projede, estetik ve işlevselliği bir araya getirdim.</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <img src="/kairo/1778612188568.jpg" alt="Kairo Render 1" className="h-48 w-full rounded-2xl object-cover" />
                <img src="/kairo/1778612188786.jpg" alt="Kairo Render 2" className="h-48 w-full rounded-2xl object-cover" />
              </div>
            </article>

            <article className="rounded-[2rem] border border-indigo-100 bg-white/80 p-8 shadow-[0_10px_40px_rgba(99,102,241,0.08)] backdrop-blur-md animate-scale-in">
              <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-700">Staj Projesi</span>
              <h2 className="mt-6 text-2xl font-bold text-slate-900">KİPTAŞ | İç Mekân Görselleştirmesi</h2>
              <p className="mt-4 text-slate-700 leading-8">Mevcut bir dairenin 3D görselleştirmesi üzerine çalıştığım bu proje, uygulama süreçlerini tasarımda deneyimlememe yardımcı oldu.</p>
              <img src="/kiptas.jpg" alt="KİPTAŞ Render" className="mt-6 h-64 w-full rounded-2xl object-cover" />
            </article>

            <article className="rounded-[2rem] border border-indigo-100 bg-white/80 p-8 shadow-[0_10px_40px_rgba(99,102,241,0.08)] backdrop-blur-md animate-scale-in">
              <span className="inline-flex rounded-full bg-amber-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">Detaylandırma</span>
              <h2 className="mt-6 text-2xl font-bold text-slate-900">Villa Projesi | Amerikan Mutfak</h2>
              <p className="mt-4 text-slate-700 leading-8">Ferah, modern ve aile yaşamına uygun bir Amerikan mutfak çözümü tasarladım. Ahşap dokular ve doğal tonlarla iç mekâna sıcaklık kattım.</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                <img src="/villa/1766665489510.jpg" alt="Villa Render 1" className="h-32 w-full rounded-2xl object-cover" />
                <img src="/villa/1766665489569.jpg" alt="Villa Render 2" className="h-32 w-full rounded-2xl object-cover" />
                <img src="/villa/1766665489606.jpg" alt="Villa Render 3" className="h-32 w-full rounded-2xl object-cover" />
              </div>
            </article>

            <article className="rounded-[2rem] border border-indigo-100 bg-white/80 p-8 shadow-[0_10px_40px_rgba(99,102,241,0.08)] backdrop-blur-md animate-scale-in">
              <span className="inline-flex rounded-full bg-purple-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-purple-700">Proje Dersi</span>
              <h2 className="mt-6 text-2xl font-bold text-slate-900">Trace Sanat Galerisi</h2>
              <p className="mt-4 text-slate-700 leading-8">Bennetton binası üzerinden geliştirdiğim galeri tasarımında, modern ve sade bir sergi akışı yaratmayı hedefledim.</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <img src="/bennetton/1766664592271.jpg" alt="Bennetton Render 1" className="h-32 w-full rounded-2xl object-cover" />
                <img src="/bennetton/1766664592624.jpg" alt="Bennetton Render 2" className="h-32 w-full rounded-2xl object-cover" />
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
