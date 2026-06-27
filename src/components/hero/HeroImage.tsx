import { motion } from "framer-motion";

/* =====================================================
   Hero Illustration
===================================================== */

function HeroImage() {
  return (
    <div
      className="
        relative

        flex

        items-center

        justify-center

        w-full

        h-[600px]
      "
    >
      {/* ==========================================
          Background Glow
      ========================================== */}

      <div
        className="
          absolute

          inset-0

          rounded-[40px]

          bg-gradient-to-br

          from-blue-50

          via-white

          to-sky-100
        "
      />

      {/* Blue Glow */}

      <div
        className="
          absolute

          top-16

          right-10

          w-60

          h-60

          rounded-full

          bg-blue-300/30

          blur-[90px]
        "
      />

      {/* Sky Glow */}

      <div
        className="
          absolute

          bottom-10

          left-12

          w-56

          h-56

          rounded-full

          bg-sky-300/20

          blur-[90px]
        "
      />

      {/* ==========================================
          Floating Card
      ========================================== */}

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          relative

          z-10

          flex

          flex-col

          items-center

          justify-center

          w-[470px]

          h-[470px]

          rounded-[36px]

          bg-white/90

          backdrop-blur-xl

          border

          border-white

          shadow-[0_30px_80px_rgba(0,0,0,0.10)]
        "
      >
        <div className="text-8xl">
          🎓
        </div>

        <h2
          className="
            mt-6

            text-4xl

            font-bold

            text-slate-800
          "
        >
          ScholarHub
        </h2>

        <p
          className="
            mt-4

            text-center

            text-lg

            leading-8

            text-slate-500

            max-w-xs
          "
        >
          Your illustration will appear here.
          Replace this placeholder with your
          final student artwork.
        </p>
      </motion.div>
    </div>
  );
}

export default HeroImage;