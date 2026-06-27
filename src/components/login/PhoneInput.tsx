import type { ChangeEvent } from "react";
import { ChevronDown } from "lucide-react";

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
}

function PhoneInput({
  value,
  onChange,
}: PhoneInputProps) {

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {

    const phone = e.target.value
      .replace(/\D/g, "")
      .slice(0, 10);

    onChange(phone);

  };

  return (

    <div
      className="
  flex
  items-center

  h-[56px]
  w-full

  rounded-2xl

  border
  border-gray-300

  bg-white

  overflow-hidden

  transition-all
  duration-200

  hover:border-gray-400

  focus-within:border-blue-600
  focus-within:ring-2
  focus-within:ring-blue-100
"
    >

      {/* ======================================
    Country Selector
====================================== */}

<button
  type="button"
  className="
    flex
    items-center
    justify-center

    gap-2

    h-full
    w-[110px]

    border-r
    border-gray-200

    bg-white

    transition-colors
    hover:bg-gray-50

    cursor-default
  "
>
  {/* Flag */}

  <span className="text-[18px] leading-none">
    🇮🇳
  </span>

  {/* Country Code */}

  <span
    className="
      text-[16px]
      font-medium
      text-gray-700
    "
  >
    +91
  </span>

  {/* Arrow */}

  <ChevronDown
    size={16}
    strokeWidth={2}
    className="text-gray-400"
  />
</button>
      {/* ==========================
          Mobile Number Input
      ========================== */}

      <input
        type="text"
        inputMode="numeric"
        autoComplete="tel"
        placeholder="Enter your mobile number"
        value={value}
        onChange={handleChange}
        className="
          flex-1
          h-full

          bg-transparent

          px-5

          text-[16px]
          font-medium
          text-gray-900

          placeholder:text-[16px]
          placeholder:font-normal
          placeholder:text-gray-400

          caret-blue-600

          outline-none
          border-none
        "
      />

    </div>

  );
}

export default PhoneInput;