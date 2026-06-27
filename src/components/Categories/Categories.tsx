import { motion } from "framer-motion";

import CategoryCard from "./CategoryCard";
import { categoryData } from "./categoryData";

/* =====================================================
   Categories Section
===================================================== */

function Categories() {

  return (

    <section
      className="
        w-full

        bg-slate-50

        py-20
      "
    >

      <div
        className="
          max-w-7xl

          mx-auto

          px-8
        "
      >

        {/* Heading */}

        <motion.div

          initial={{
            opacity: 0,
            y: 20,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: .5,
          }}

          className="
            text-center

            mb-16
          "
        >

          <span
            className="
              inline-flex

              rounded-full

              bg-blue-100

              px-5

              py-2

              text-sm

              font-semibold

              text-blue-700
            "
          >
            Explore Categories
          </span>

          <h2
            className="
              mt-5

              text-5xl

              font-bold

              tracking-tight

              text-slate-900
            "
          >
            Choose Your Learning Path
          </h2>

          <p
  className="
    mt-6

    mx-auto

    max-w-[760px]

    text-center

    text-[20px]

    leading-9

    text-slate-500
  "
>
  Explore expert-led courses, study materials, practice tests and
  <br />
  learning paths designed for every student's success.
</p>

        </motion.div>

        {/* Grid */}

        <div
          className="
            grid

            grid-cols-1

            sm:grid-cols-2

            lg:grid-cols-4

            gap-8
          "
        >

          {categoryData.map((category) => (

            <CategoryCard
              key={category.id}
              category={category}
            />

          ))}

        </div>

      </div>

    </section>

  );

}

export default Categories;