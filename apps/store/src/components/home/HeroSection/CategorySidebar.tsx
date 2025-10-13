"use client";
import Link from "next/link";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

const CATEGORIES = [
  "Computadores",
  "Laptops & Gaming",
  "Smartphones",
  "Audio & Video",
  "Accesorios",
  "Periféricos RGB",
  "Hogar Inteligente",
  "Ofertas Flash",
];

export default function CategorySidebar() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <aside className="hidden lg:block w-64 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg">
      <h3 className="px-4 py-3 text-sm font-semibold uppercase tracking-wide text-white/70 border-b border-white/10">
        Categorías
      </h3>
      <ul className="divide-y divide-white/10">
        {CATEGORIES.map((cat) => (
          <li key={cat}>
            <Link
              href={`/catalog?category=${encodeURIComponent(cat)}`}
              onMouseEnter={() => setHovered(cat)}
              onMouseLeave={() => setHovered(null)}
              className="flex items-center justify-between px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/10 transition"
            >
              <span>{cat}</span>
              <ChevronRight
                size={16}
                className={`transition-transform ${
                  hovered === cat ? "translate-x-1 opacity-100" : "opacity-50"
                }`}
              />
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
