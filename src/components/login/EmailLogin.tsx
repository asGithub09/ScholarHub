import { useState } from "react";
import { motion } from "framer-motion";

/* =====================================================
   Email Login Props
===================================================== */

interface EmailLoginProps {
  onBackToPhone: () => void;
}

/* =====================================================
   Email Login Component
===================================================== */

function EmailLogin({
  onBackToPhone,
}: EmailLoginProps) {

  /* ==========================================
     State
  ========================================== */

  const [email, setEmail] = useState("");

  /* ==========================================
     Email Validation
  ========================================== */

  const isValidEmail =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (

    <motion.div

      initial={{
        opacity: 0,
        x: 40,
      }}

      animate={{
        opacity: 1,
        x: 0,
      }}

      exit={{
        opacity: 0,
        x: -40,
      }}

      transition={{
        duration: 0.25,
      }}

      className="w-full"
    >

      {/* ==========================================
          Heading
      ========================================== */}

      <h1
        className="
          text-[36px]
          font-bold
          text-gray-900
        "
      >
        Login
      </h1>

      {/* ==========================================
          Subtitle
      ========================================== */}

      <p
        className="
          mt-3
          text-[15px]
          text-gray-500
        "
      >
        New to ScholarHub?

        <button
          className="
            ml-1

            font-semibold

            text-green-500

            hover:underline
          "
        >
          Create Account
        </button>

      </p>

      {/* ==========================================
          Email Input
      ========================================== */}

      <div className="mt-8">

        <input

          type="email"

          placeholder="Enter your email address"

          value={email}

          onChange={(e) => setEmail(e.target.value)}

          className="
            w-full
            h-[56px]

            rounded-2xl

            border
            border-gray-300

            px-5

            text-[16px]
            font-medium

            placeholder:text-gray-400

            outline-none

            transition-all

            focus:border-blue-600
            focus:ring-2
            focus:ring-blue-100
          "

        />

      </div>

      {/* ==========================================
          Continue Button
      ========================================== */}

      <motion.button

        whileHover={{
          scale: 1.01,
        }}

        whileTap={{
          scale: 0.98,
        }}

        disabled={!isValidEmail}

        className={`
          mt-8

          w-full
          h-[52px]

          rounded-xl

          font-semibold

          transition-all

          ${
            isValidEmail
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
          }
        `}
      >

        Continue

      </motion.button>

      {/* ==========================================
          Back to Mobile Login
      ========================================== */}

      <button

        onClick={onBackToPhone}

        className="
          mt-6

          w-full

          text-center

          text-[15px]

          font-medium

          text-gray-600

          hover:text-blue-600

          transition
        "
      >

        Continue with mobile number

      </button>

      {/* ==========================================
          Footer
      ========================================== */}

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

              hover:underline
            "
          >
            Help Center
          </button>

        </div>

      </div>

    </motion.div>
  );
}

export default EmailLogin;