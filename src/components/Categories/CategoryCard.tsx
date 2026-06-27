import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Category } from "./categoryData";

/* =====================================================
   Category Card Props
===================================================== */

interface CategoryCardProps {
  category: Category;
}

/* =====================================================
   Category Card
===================================================== */

function CategoryCard({
  category,
}: CategoryCardProps) {

  const Icon = category.icon;

  return (

    <motion.div

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
        group

        bg-white

        rounded-3xl

        border

        border-slate-200

        shadow-sm

        hover:shadow-xl

        hover:border-blue-200

        transition-all

        duration-300

        cursor-pointer

        p-6

        h-[185px]

        flex

        flex-col
      "
    >

      {/* ==========================
          Icon
      ========================== */}

      <div
        className={`
          w-12
          h-12

          rounded-xl

          flex

          items-center

          justify-center

          ${category.color}
        `}
      >

        <Icon
          size={24}
          className="
            transition-all

            duration-300

            group-hover:scale-110
          "
        />

      </div>

      {/* ==========================
          Title
      ========================== */}

      <h3
        className="
          mt-4

          text-xl

          font-bold

          text-slate-900
        "
      >
        {category.title}
      </h3>

      {/* ==========================
          Courses
      ========================== */}

      <p
        className="
          mt-1

          text-sm

          text-slate-500
        "
      >
        {category.courses}
      </p>

      {/* ==========================
          Bottom
      ========================== */}

      <div
        className="
          mt-auto

          pt-5

          flex

          items-center

          justify-between

          border-t

          border-slate-100
        "
      >

        <span
          className="
            text-sm

            font-semibold

            text-blue-600
          "
        >
          Explore
        </span>

        <div
          className="
            w-9

            h-9

            rounded-full

            bg-blue-600

            text-white

            flex

            items-center

            justify-center

            transition-all

            duration-300

            group-hover:translate-x-1
          "
        >
          <ArrowRight size={16} />
        </div>

      </div>

    </motion.div>

  );
}

export default CategoryCard;