type SelectProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
};

export default function Select({ label, value, onChange, options }: SelectProps) {
  return (
    <div className="mb-3">
      <label className="text-xs text-gray-500 block mb-1">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}