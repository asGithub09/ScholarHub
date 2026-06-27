import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

/* =====================================================
   Hero Section
===================================================== */

function Hero() {
  return (
    <section
      className="
        w-full
        bg-white
        overflow-hidden
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-8
          lg:px-12
          pt-4
          pb-10

          grid
          lg:grid-cols-2

          items-center
          gap-16
        "
      >
        <HeroContent />

        <HeroImage />
      </div>
    </section>
  );
}

export default Hero;