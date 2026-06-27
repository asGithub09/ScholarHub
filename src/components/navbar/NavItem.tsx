import { useRef, useState } from "react";
import { motion } from "framer-motion";

import DropdownCard from "./DropdownCard";
import type { MenuItem } from "./menuData";

/* =====================================================
   Nav Item Props
===================================================== */

interface NavItemProps {
  item: MenuItem;
}

/* =====================================================
   Nav Item Component
===================================================== */

function NavItem({
  item,
}: NavItemProps) {

  /* ==========================================
     Dropdown State
  ========================================== */

  const [open, setOpen] = useState(false);

  /* ==========================================
     Close Timer
  ========================================== */

  const closeTimer = useRef<number | null>(null);

  /* ==========================================
     Open Dropdown
  ========================================== */

  const handleOpen = () => {

    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
    }

    setOpen(true);
  };

  /* ==========================================
     Close Dropdown
  ========================================== */

  const handleClose = () => {

    closeTimer.current = window.setTimeout(() => {

      setOpen(false);

    }, 180);

  };

  return (

    <div
      className="relative"

      onMouseEnter={handleOpen}

      onMouseLeave={handleClose}
    >

      {/* ==========================================
          Navigation Button
      ========================================== */}

      <motion.button

        whileHover={{
          y: -2,
        }}

        transition={{
          duration: 0.2,
        }}

        className="
          relative

          px-2
          py-2

          text-[15px]

          font-medium

          text-gray-700

          hover:text-blue-600

          transition-colors
        "
      >

        {item.title}

      </motion.button>

      {/* ==========================================
          Small Arrow
      ========================================== */}

      {open && (

        <motion.div

          initial={{
            opacity: 0,
          }}

          animate={{
            opacity: 1,
          }}

          exit={{
            opacity: 0,
          }}

          className="
            absolute

            left-1/2

            top-full

            mt-2

            -translate-x-1/2

            w-3
            h-3

            rotate-45

            bg-white

            border-l

            border-t

            border-gray-200

            z-50
          "
        />

      )}

      {/* ==========================================
          Dropdown Card
      ========================================== */}

      <DropdownCard

        item={item}

        open={open}

      />

    </div>

  );

}

export default NavItem;