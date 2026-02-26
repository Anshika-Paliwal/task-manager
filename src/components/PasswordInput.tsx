import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

interface PasswordInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

function PasswordInput({
  className = "",
  onChange,
  placeholder = "Password",
  value,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full">
      <input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`
          w-full
          border border-gray-300 dark:border-gray-600
          bg-white dark:bg-gray-700
          text-gray-800 dark:text-white
          placeholder-gray-400 dark:placeholder-gray-300
          focus:border-blue-500
          focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-500/30
          outline-none
          p-3 pr-10
          rounded-xl
          transition
          ${className}
        `}
      />

      <button
        type="button"
        onClick={() => setShowPassword((prev) => !prev)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white transition"
      >
        {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
      </button>
    </div>
  );
}

export default PasswordInput;
