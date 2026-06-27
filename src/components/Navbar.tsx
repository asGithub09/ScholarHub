import NavItem from "./navbar/NavItem";
import { menuData } from "./navbar/menuData";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

import AuthDrawer from "./login/AuthDrawer";
function Navbar() {
  // Controls whether the login drawer is open
const [loginOpen, setLoginOpen] = useState(false);

  return (
  <>
    {/* ==========================
        NAVBAR CONTAINER
    ========================== */}

    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto h-24 flex items-center justify-between px-8">

        {/* ==========================
            LOGO
        ========================== */}

        <div className="flex items-center gap-3">

          {/* Logo Icon */}
          <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center text-white text-xl font-bold">
            S
          </div>

          {/* Logo Text */}
          <div>

            <h1 className="text-4xl font-bold">
              Scholar
              <span className="text-blue-600">
                Hub
              </span>
            </h1>

            <p className="text-xs text-gray-500">
              Notes • Tests • Success
            </p>

          </div>

        </div>

{/* ==========================
    CENTER NAVIGATION
========================== */}

<nav className="hidden lg:flex items-center gap-10">

  {menuData.map((item) => (
    <NavItem
      key={item.id}
      item={item}
    />
  ))}

</nav>

        {/* ==========================
            RIGHT SIDE BUTTONS
        ========================== */}

        <div className="hidden lg:flex items-center gap-5">

          {/* Login Button */}

          <motion.button
  onClick={() => setLoginOpen(true)}
  whileHover={{ y: -3 }}
  whileTap={{ scale: 0.98 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 18,
  }}
  className="
    w-40
    h-12
    rounded-xl
    border
    border-gray-300
    bg-white
    text-gray-800
    font-semibold
    hover:border-blue-600
    hover:text-blue-600
    transition-all
  "
>
  Log in
</motion.button>

          {/* Join Button */}

          <motion.button
            whileHover={{
              y: -4,
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 18,
            }}
            className="
              w-44
              h-14
              rounded-xl
              bg-slate-800
              text-white
              text-base
              font-semibold
              tracking-wide
              shadow-sm
              hover:bg-blue-600
              hover:shadow-lg
              transition-all
              duration-300
            "
          >
            Join for Free
          </motion.button>

        </div>

        {/* ==========================
            MOBILE MENU
        ========================== */}

        <button className="lg:hidden">
          <Menu />
        </button>

      </div>

    </header>

    {/* Login Drawer */}

    <AuthDrawer
      open={loginOpen}
      onClose={() => setLoginOpen(false)}
    />

  </>
);
}

export default Navbar;