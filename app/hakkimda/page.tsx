'use client';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function HakkimdaPage() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-100 to-indigo-100 text-slate-900 pt-28 pb-16">
      <main className="mx-auto max-w-6xl px-6 py-16">
        <section className="rounded-[2rem] border border-indigo-100 bg-white/90 p-10 shadow-[0_10px_40px_rgba(99,102,241,0.08)] backdrop-blur-md">
          <h1 className="text-4xl font-semibold mb-6 text-slate-900">Hakkımda</h1>
          <div className="flex flex-col items-center gap-6">
            <div className="w-full max-w-5xl rounded-[1.75rem] border border-slate-200 bg-slate-100 p-2 mx-auto">
              <div className="w-full max-w-5xl rounded-[1.75rem] border border-slate-200 bg-slate-100 p-2 mx-auto">

  {/* ✅ Bunu ekle */}
  <div className="flex justify-end mb-2">
    
       <a href="/001_Omer_Fazlioglu_Ic_Mimarlik_CV.pdf"
      download
      className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm hover:bg-indigo-700 transition"
    >
      ⬇ CV İndir
    </a>
  </div>

</div>
              <iframe
                src="/001_Omer_Fazlioglu_Ic_Mimarlik_CV.pdf#toolbar=0&navpanes=0&scrollbar=0"
                title="001_Omer_Fazlioglu_Ic_Mimarlik_CV"
                className="h-[80vh] w-full rounded-[1.5rem] border border-slate-200 bg-white"
              >
                Bu tarayıcı PDF dosyasını doğrudan görüntüleyemiyor. Lütfen dosyayı indirmek için <a href="/001_Omer_Fazlioglu_Ic_Mimarlik_CV.pdf" className="text-indigo-600 underline">buraya tıklayın</a>.
              </iframe>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
