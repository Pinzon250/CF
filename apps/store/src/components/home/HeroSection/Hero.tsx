import CategorySidebar from "./CategorySidebar";
import HeroSlider from "./HeroSlider";

export default function HeroSection() {
  return (
    <section className="relative py-6">
      <div className="mx-auto max-w-6xl flex flex-col lg:flex-row gap-6">
        <CategorySidebar />
        <div className="flex-1">
          <HeroSlider />
        </div>
      </div>
    </section>
  );
}
