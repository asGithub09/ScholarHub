import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";

/* =====================================================
   Hero Content
===================================================== */

function HeroContent() {
  return (
    
    <div
  className="
    flex
    flex-col

    max-w-xl

    lg:pr-6
  "
>      {/* ==========================================
          Small Badge
      ========================================== */}

      <span
        className="
          inline-flex
          w-fit

          rounded-full

          bg-blue-100

          px-4
          py-2

          text-sm
          font-semibold

          text-blue-700
        "
      >
        🎓 Trusted Learning Platform
      </span>

      {/* ==========================================
          Hero Heading
      ========================================== */}

      <h1
        className="
          mt-8

          text-5xl

          lg:text-6xl

          font-extrabold

          leading-tight

          tracking-tight

          text-slate-900
        "
      >
        Learning Today.
        <br />
        Leading Tomorrow.
      </h1>

      {/* ==========================================
          Hero Description
      ========================================== */}

      <p
        className="
          mt-7

          max-w-xl

          text-lg

          leading-8

          text-slate-500
        "
      >
        ScholarHub brings together premium courses,
        study materials, quizzes and expert faculty
        to help students learn smarter and achieve
        their academic goals.
      </p>

      {/* ==========================================
          Buttons
      ========================================== */}

      <div className="mt-10">
        <HeroButtons />
      </div>

      {/* ==========================================
          Statistics
      ========================================== */}

      <div className="mt-16">
        <HeroStats />
      </div>
    </div>
  );
}

export default HeroContent;