export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-screen px-6">
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-rose-400 bg-clip-text text-transparent">
            Nişantaşı Üniversitesi Bilgisayar Mühendisliği mezunu, modern teknolojilerle çığır açan dijital deneyimler inşa eden iddialı bir yazılım lideriyim.
          </h1>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Deneyim</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-2xl">
            <h3 className="text-2xl font-semibold mb-4">Bilgisayar Mühendisliği</h3>
            <p className="text-lg mb-2">Nişantaşı Üniversitesi</p>
            <p className="text-gray-300">Mezuniyet Tarihi: 20.05.2025</p>
          </div>
        </div>
      </section>

      {/* Selected Projects Section */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Seçilmiş Projeler</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-2xl">
              <h3 className="text-2xl font-semibold mb-4">Kodlama Projesi</h3>
              <p className="text-gray-300 mb-4">Teknik Stack: Next.js, Sanity, React Native</p>
              <p className="text-lg">Web ve mobil için performans odaklı bir deneyim platformu, kullanıcı merkezli arayüz ve içerik yönetiminde verimlilik sağladı.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Yetenekler</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-full text-lg font-medium shadow-lg">TypeScript</span>
            <span className="bg-gradient-to-r from-green-500 to-blue-600 px-6 py-3 rounded-full text-lg font-medium shadow-lg">Gemini API</span>
            <span className="bg-gradient-to-r from-pink-500 to-red-600 px-6 py-3 rounded-full text-lg font-medium shadow-lg">Flutter</span>
            {/* Daha fazla skill eklenebilir */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">İletişim</h3>
          <div className="flex justify-center gap-8">
            <a href="mailto:info@example.com" className="text-lg hover:text-cyan-300 transition-colors">E-posta</a>
            <a href="https://linkedin.com/in/example" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-cyan-300 transition-colors">LinkedIn</a>
            <a href="https://github.com/example" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-cyan-300 transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
