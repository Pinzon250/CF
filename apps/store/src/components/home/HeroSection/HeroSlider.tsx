"use client";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    title: "Tecnología que brilla",
    subtitle: "La nueva era del gaming RGB",
    img: "",
    cta: "Explorar ahora",
    href: "/catalog?category=Periféricos RGB",
  }]


export default function HeroSlider() {
  const [sliderRef] = useKeenSlider({
    loop: true,
  });

  return (
    <div ref={sliderRef} className="keen-slider rounded-2xl overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className="keen-slider__slide relative h-[320px] md:h-[420px] bg-black"
        >
          <Image
            src={slide.img}
            alt={slide.title}
            fill
            className="object-cover opacity-80"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-center px-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">{slide.title}</h2>
            <p className="text-white/80 mb-6 text-sm md:text-base">{slide.subtitle}</p>
            <Link
              href={slide.href}
              className="bg-fuchsia-600 hover:bg-fuchsia-500 text-white text-sm md:text-base px-4 py-2 rounded-lg w-fit"
            >
              {slide.cta}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
