import React from 'react';
import ReactSelect from 'react-select';

export default function Select({
  label,
  onChange,
  options,
  placeholder,
  value,
}) {
  const selected = options.filter((o) => o.value === value).pop();
  return (
    <ReactSelect
      aria-label={label}
      placeholder={placeholder}
      value={selected}
      onChange={(selected) => onChange(selected ? selected.value : null)}
      isSearchable={true}
      isClearable={true}
      options={options}
    />
  );
}
