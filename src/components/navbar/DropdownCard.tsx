import { AnimatePresence, motion } from "framer-motion";
import type { MenuItem } from "./menuData";

/* =====================================================
   Dropdown Card Props
===================================================== */

interface DropdownCardProps {
  item: MenuItem;
  open: boolean;
}

/* =====================================================
   Dropdown Card Component
===================================================== */

function DropdownCard({
  item,
  open,
}: DropdownCardProps) {
  return (
    <AnimatePresence>

      {open && (

        <motion.div

          /* ==========================================
             Animation
          ========================================== */

          initial={{
            opacity: 0,
            y: -12,
            scale: 0.96,
          }}

          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}

          exit={{
            opacity: 0,
            y: -12,
            scale: 0.96,
          }}

          transition={{
            duration: 0.22,
          }}

          /* ==========================================
             Card
          ========================================== */

          className="
            absolute

            left-1/2
            top-full

            mt-5

            -translate-x-1/2

            w-[390px]

            overflow-hidden

            rounded-3xl

            border
            border-gray-200

            bg-white/95

            backdrop-blur-md

            shadow-[0_20px_60px_rgba(0,0,0,.12)]

            z-50
          "
        >

          {/* ==========================================
              Header
          ========================================== */}

          <div
            className="
              flex
              items-center
              gap-4

              px-7
              pt-7
            "
          >

            <div
              className="
                flex
                items-center
                justify-center

                w-14
                h-14

                rounded-2xl

                text-3xl
              "
              style={{
                backgroundColor: `${item.color}15`,
              }}
            >
              {item.icon}
            </div>

            <div>

              <h3
                className="
                  text-xl
                  font-bold
                  text-gray-900
                "
              >
                {item.heading}
              </h3>

              <p
                className="
                  mt-1

                  text-sm

                  text-gray-500
                "
              >
                Explore ScholarHub
              </p>

            </div>

          </div>

          {/* ==========================================
              Description
          ========================================== */}

          <p
            className="
              px-7
              pt-6

              text-[15px]

              leading-7

              text-gray-600
            "
          >
            {item.description}
          </p>

          {/* ==========================================
              Features
          ========================================== */}

          <div
            className="
              mt-6

              space-y-3

              px-7
            "
          >

            {item.features.map((feature) => (

              <div
                key={feature}
                className="
                  flex
                  items-center
                  gap-3
                "
              >

                <div
                  className="
                    flex
                    items-center
                    justify-center

                    w-6
                    h-6

                    rounded-full

                    bg-green-100

                    text-green-600

                    text-xs

                    font-bold
                  "
                >
                  ✓
                </div>

                <span
                  className="
                    text-[15px]

                    text-gray-700
                  "
                >
                  {feature}
                </span>

              </div>

            ))}

          </div>

          {/* ==========================================
              Footer
          ========================================== */}

          <div
            className="
              mt-7

              border-t

              border-gray-100

              px-7
              py-5
            "
          >

            <button
              className="
                font-semibold

                text-blue-600

                hover:translate-x-1

                transition-all
              "
            >
              {item.button}
            </button>

          </div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}

export default DropdownCard;