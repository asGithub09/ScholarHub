import { useState } from "react";
import { motion } from "framer-motion";
import PhoneInput from "./PhoneInput";

/* =====================================================
   Mobile Login Props
===================================================== */

interface MobileLoginProps {
  onContinueWithEmail: () => void;
}

/* =====================================================
   Mobile Login Component
===================================================== */

function MobileLogin({
  onContinueWithEmail,
}: MobileLoginProps) {

  /* ==========================================
     State
  ========================================== */

  const [phone, setPhone] = useState("");

  return (
    <div className="w-full">

      {/* ======================================
          Heading
      ====================================== */}

      <h1
        className="
          text-[42px]
          font-extrabold
          tracking-tight
          text-gray-900
        "
      >
        Login
      </h1>

      {/* ======================================
          Subtitle
      ====================================== */}

      <p
        className="
          mt-3
          text-[16px]
          text-gray-500
        "
      >
        New to ScholarHub?

        <button
          className="
            ml-2
            font-semibold
            text-blue-600
            hover:text-blue-700
            transition-colors
          "
        >
          Create Account
        </button>

      </p>

      {/* ======================================
          Phone Input
      ====================================== */}

      <div className="mt-10">

        <PhoneInput
          value={phone}
          onChange={setPhone}
        />

      </div>

      {/* ======================================
          Action Buttons
      ====================================== */}

      <div className="mt-8 flex items-center justify-between">

        {/* Login Button */}

        <motion.button
          whileHover={{
            y: -2,
            scale: 1.01,
          }}
          whileTap={{
            scale: 0.98,
          }}
          disabled={phone.length !== 10}
          className={`
            h-12
            w-40

            rounded-xl

            font-semibold

            transition-all
            duration-300

            ${
              phone.length === 10
                ? "bg-blue-600 text-white shadow-md hover:bg-blue-700"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }
          `}
        >
          Login
        </motion.button>

        {/* Continue with Email */}

        <button
          onClick={onContinueWithEmail}
          className="
            text-[15px]
            font-medium
            text-gray-600
            hover:text-blue-600
            transition-colors
          "
        >
          Continue with email
        </button>

      </div>

      {/* ======================================
          Footer
      ====================================== */}

      <div className="mt-12">

        <div className="border-t border-gray-200" />

        <div className="mt-6 flex items-center justify-between">

          <span className="text-sm text-gray-500">
            Need help?
          </span>

          <button
            className="
              text-sm
              font-semibold
              text-blue-600
              hover:text-blue-700
            "
          >
            Help Center →
          </button>

        </div>

      </div>

    </div>
  );
}

export default MobileLogin;