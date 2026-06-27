import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import MobileLogin from "./MobileLogin";
import EmailLogin from "./EmailLogin";


/* =====================================================
   Auth Drawer Props
===================================================== */



interface AuthDrawerProps {
  open: boolean;
  onClose: () => void;
}

/* =====================================================
   Auth Drawer Component
===================================================== */

function AuthDrawer({
  open,
  onClose,
}: AuthDrawerProps) {

  /* ==========================================
     Login Mode
     ------------------------------------------
     phone -> Mobile Login
     email -> Email Login
  ========================================== */

  const [mode, setMode] = useState<"phone" | "email">("phone");

  /* ==========================================
     Don't render drawer when closed
  ========================================== */

  if (!open) return null;

  return (
    <AnimatePresence>

      <motion.div
        className="
          fixed
          inset-0
          z-50
          flex
          justify-end
        "
      >

        {/* ==========================================
            Dark Background Overlay
        ========================================== */}

        <div
          className="absolute inset-0 bg-black/20"
          onClick={onClose}
        />

        {/* ==========================================
            Right Drawer
        ========================================== */}

        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 28,
          }}
          className="
            relative

            h-screen
            w-[480px]

            bg-white

            p-10
          "
        >

          {/* ==========================================
              Close Button
          ========================================== */}

          <button
            onClick={onClose}
            className="
              text-4xl
              text-gray-500
              hover:text-black
              transition
            "
          >
            ✕
          </button>

          {/* ==========================================
              Login Screens
          ========================================== */}

          {mode === "phone" ? (

            <MobileLogin
              onContinueWithEmail={() => setMode("email")}
            />

          ) : (

            <EmailLogin
              onBackToPhone={() => setMode("phone")}
            />

          )}

        </motion.div>

      </motion.div>

    </AnimatePresence>
  );
}

export default AuthDrawer;