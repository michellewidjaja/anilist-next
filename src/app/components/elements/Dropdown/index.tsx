import React from "react";
import { ChevronDown } from "react-feather";

interface DropdownProps {
  options: string[];
  onChange: (value: string) => void;
  id: string;
  name: string;
  value: string;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
}

export default function Dropdown({
  options,
  onChange,
  id,
  name,
  value,
  disabled,
  className,
  placeholder
}: DropdownProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={`relative ${className || ''}`}>
      <select 
        onChange={handleChange} 
        id={id} 
        name={name}
        value={value} 
        disabled={disabled} 
        className="appearance-none w-full px-4 py-2 rounded-lg shadow-sm focus:outline-none text-gray bg-black-100">
          <option value={0}>{placeholder || "Select Options"}</option>
          {options.map((value, key) => (
            <option key={key} value={value}>
              {value}
            </option>
          ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400">
        <ChevronDown size={20} />
      </div>
    </div>
  );
}
