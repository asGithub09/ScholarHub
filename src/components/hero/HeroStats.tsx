import { motion } from "framer-motion";

/* =====================================================
   Statistics Data
===================================================== */

const stats = [
  {
    value: "100+",
    label: "Premium Courses",
  },
  {
    value: "15K+",
    label: "Study Materials",
  },
  {
    value: "50+",
    label: "Expert Faculty",
  },
  {
    value: "24/7",
    label: "Learning Support",
  },
];

/* =====================================================
   Hero Statistics
===================================================== */

function HeroStats() {
  return (
    <div
      className="
        mt-2

        grid

        grid-cols-2

        lg:grid-cols-4

        gap-6
      "
    >
      {stats.map((item) => (
        <motion.div
          key={item.label}
          whileHover={{
            y: -6,
            scale: 1.02,
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 18,
          }}
          className="
            h-[125px]

            rounded-2xl

            border

            border-slate-200

            bg-white

            shadow-sm

            hover:shadow-xl

            transition-all

            duration-300

            flex

            flex-col

            justify-center

            px-6
          "
        >
          {/* Number */}

          <h3
            className="
              text-[52px]

              font-extrabold

              leading-none

              tracking-tight

              text-blue-600
            "
          >
            {item.value}
          </h3>

          {/* Label */}

          <p
            className="
              mt-3

              text-[17px]

              leading-6

              font-medium

              text-slate-500
            "
          >
            {item.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

export default HeroStats;