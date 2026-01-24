// Add this helper component at the top of ContactForm.tsx or in a separate file
import React from "react";
import { ChevronDown, Check } from "lucide-react";

const CustomSelect = ({
  value,
  onChange,
  options,
  placeholder,
}: {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder: string;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  // Close dropdown if clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLabel = options.find((opt) => opt.value === value)?.label;

  return (
    <div className="relative group" ref={dropdownRef}>
      {/* 1. The Trigger (Looks like your other inputs) */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-white/5 border border-brand-cream/20 border-0 px-2 py-4 
        text-brand-cream cursor-pointer flex justify-between items-center transition-all duration-300 placeholder:font-(family-name:--font-plus-jakarta-sans)
        ${isOpen ? "border-brand-gold" : ""}
        `}
      >
        <span className={value ? "text-brand-cream" : "text-brand-cream/40"}>
          {selectedLabel || placeholder}
        </span>
        <ChevronDown
          size={16}
          className={`text-brand-gold transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* 2. The Dropdown Body (The part you wanted to style!) */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-2 bg-[#472830] border border-[#b08d55] rounded-xl shadow-2xl z-50 overflow-hidden animate-fade-in-up">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className="px-6 py-4 cursor-pointer flex justify-between items-center group/item hover:bg-[#b08d55] transition-colors duration-200 font-(family-name:--font-plus-jakarta-sans)"
            >
              <span className="text-brand-cream group-hover/item:text-brand-dark font-(family-name:--font-plus-jakarta-sans) text-sm">
                {option.label}
              </span>
              {value === option.value && (
                <Check
                  size={16}
                  className="text-brand-dark group-hover/item:text-brand-dark font-(family-name:--font-plus-jakarta-sans)"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
