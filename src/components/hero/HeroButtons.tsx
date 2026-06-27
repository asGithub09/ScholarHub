import { motion } from "framer-motion";

/* =====================================================
   Hero Buttons
===================================================== */

function HeroButtons() {
  return (
    <div
      className="
        mt-10

        flex

        flex-wrap

        items-center

        gap-4
      "
    >
      {/* ==========================================
          Primary Button
      ========================================== */}

      <motion.button
        whileHover={{
          y: -3,
        }}
        whileTap={{
          scale: 0.98,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 18,
        }}
        className="
          h-12

          rounded-xl

          bg-blue-600

          px-7

          text-base

          font-semibold

          text-white

          shadow-md

          transition-all

          duration-300

          hover:bg-blue-700

          hover:shadow-lg
        "
      >
        Explore Courses
      </motion.button>

      {/* ==========================================
          Secondary Button
      ========================================== */}

      <motion.button
        whileHover={{
          y: -3,
        }}
        whileTap={{
          scale: 0.98,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 18,
        }}
        className="
          h-12

          rounded-xl

          border

          border-slate-300

          bg-white

          px-7

          text-base

          font-semibold

          text-slate-700

          transition-all

          duration-300

          hover:border-blue-600

          hover:text-blue-600

          hover:shadow-md
        "
      >
        Browse Notes
      </motion.button>
    </div>
  );
}

export default HeroButtons;