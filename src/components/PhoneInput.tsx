import "react-phone-number-input/style.css";
import PhoneInputFromLib, {
  isValidPhoneNumber,
} from "react-phone-number-input";
import { useState } from "react";

interface CustomPhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export default function CustomPhoneInput({
  value,
  onChange,
  className,
}: CustomPhoneInputProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div className={`w-full group ${className}`}>
      <label className="font-(family-name:--font-plus-jakarta-sans) block text-xs uppercase tracking-widest text-brand-gold mb-1 group-focus-within:text-brand-cream transition-colors">
        Phone Number *
      </label>

      <div
        className={`
          flex items-center w-full px-2 py-4 rounded-md transition-all duration-300
          bg-white/5 
          ${focused ? "border-brand-gold ring-0" : "border-brand-cream/20"}
        `}
      >
        <PhoneInputFromLib
          international
          defaultCountry="IN"
          countries={["IN", "AE", "TH", "MV"]} // India, UAE, Thailand, Maldives, USA, UK
          value={value}
          onChange={(val) => onChange(val || "")}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          // Custom styles to force the library to match your Dark Theme
          className="phone-input-container flex w-full"
          numberInputProps={{
            className:
              "w-full bg-transparent border-none outline-none text-brand-cream placeholder-brand-cream/40 font-(family-name:--font-plus-jakarta-sans) ml-2",
            placeholder: "+91 98765 43210",
          }}
        />
      </div>

      {/* Small CSS override for the country selector dropdown to make it dark */}
      <style jsx global>{`
        .PhoneInputCountry {
          margin-right: 0.5rem;
        }
        .PhoneInputCountryIcon {
          box-shadow: none;
          background-color: transparent;
        }
        .PhoneInputInput {
          outline: none;
          background: transparent;
        }

        /* Dark Theme Dropdown Styling */
        .PhoneInputCountrySelect {
          background-color: #472830;
          color: #f6e9cf;
        }
      `}</style>
    </div>
  );
}

export const validatePhone = (number: string) => {
  if (!number) return false;
  return isValidPhoneNumber(number);
};
