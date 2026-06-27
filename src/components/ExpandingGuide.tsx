import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { guideMenu } from "../data/menu";

function ExpandingGuide() {

  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center h-16"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <AnimatePresence mode="sync">

        {!expanded ? (
          <motion.button
            key="guide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

            whileHover={{
              y: -10,
              rotate: -10,
              scale: 1.18,
            }}

            transition={{
              type: "spring",
              stiffness: 450,
              damping: 18,
              mass: 0.55,
            }}

            className="
    flex
    items-center
    justify-center

    w-14
    h-14

    rounded-full

    border
    border-gray-200

    bg-white

    shadow-md

    hover:border-blue-500
    hover:shadow-[0_15px_40px_rgba(37,99,235,0.25)]

    transition-all
  "
          >
            <GraduationCap
              size={28}
              className="text-blue-600"
            />
          </motion.button>
        ) : (
          <motion.div
            key="expanded"
            layout
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 420,
              damping: 28,
            }}
            className="flex items-center gap-8"
          >

            {/* LEFT */}

            <div className="flex items-center gap-6">

              {guideMenu.left.map((item) => (

                <motion.a
                  key={item.id}
                  href={item.href}
                  initial={{
                    x: 60,
                    opacity: 0,
                  }}

                  animate={{
                    x: 0,
                    opacity: 1,
                  }}

                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 22,
                  }}
                  className="font-medium hover:text-blue-600 transition"
                >
                  {item.title}
                </motion.a>

              ))}

            </div>

            {/* LOGO */}

            <motion.div
              layout
              layoutId="logo"

              initial={{
                opacity: 0,
                scale: 0.7,
              }}

              animate={{
                opacity: 1,
                scale: 1,
              }}

              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="text-3xl font-bold cursor-pointer"
            >
              Scholar
              <span className="text-blue-600">
                Hub
              </span>
            </motion.div>

            {/* RIGHT */}

            <div className="flex items-center gap-6">

              {guideMenu.right.map((item) => (

                <motion.a
                  initial={{
                    x: 60,
                    opacity: 0,
                  }}

                  animate={{
                    x: 0,
                    opacity: 1,
                  }}

                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 22,
                  }}
                  className="font-medium hover:text-blue-600 transition"
                >
                  {item.title}
                </motion.a>

              ))}

            </div>

          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}

export default ExpandingGuide;