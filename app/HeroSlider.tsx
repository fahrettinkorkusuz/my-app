'use client';
import { useEffect, useState } from 'react';

const slides = [
  'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=80',
  'https://images.unsplash.com/photo-1464146072230-91cabc968266?w=1800&q=80',
  'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=1800&q=80',
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[2000ms]"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${src})`,
              animation: 'kenburns 12s ease-in-out infinite alternate',
            }}
          />
        </div>
      ))}

      {/* Karartma */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Yazılar */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        <p className="text-xs uppercase tracking-[0.4em] text-white/60 mb-6">
          İç Mimarlık & Çevre Tasarımı
        </p>
        <h1 className="text-5xl md:text-7xl font-serif font-semibold leading-tight max-w-4xl">
          Tasarımın Her Detayında Zarafet
        </h1>
        <p className="mt-6 text-lg text-white/70 max-w-xl">
          Altınbaş Üniversitesi — Mezuniyet 2027
        </p>
      </div>
    </div>
  );
}