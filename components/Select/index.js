import React from 'react';
import ReactSelect from 'react-select';

export default function Select({
  label,
  onChange,
  options,
  placeholder,
  value,
}) {

  const customStyles = {
    menu: (provided) => ({
      ...provided,
      background: '#121B36'
    }),
    option: (provided, state) => ({
      ...provided,
      color: '#333',
      paddingLeft: '1em',
      background: state.isFocused ? '#7C3AED' : '#121B36',
      color: '#fff'
    }),
    control: (provided) => ({
        ...provided,
        background: '#0C1223',
        padding: '0',
        borderColor: '#cbd4d9',
        minHeight: '48px'
    }),
    valueContainer: (provided) => ({
        ...provided,
        padding: '0'
    }),
    singleValue: (provided) => ({
        ...provided,
        paddingLeft: '1em',
        marginLeft: '0',
        color: '#fff' 
    }),
    clearIndicator: (provided) => ({
      ...provided,
      color: '#333'
    }),
    clearIndicator: () => ({
      color: '#fff'
    }),
    indicatorSeparator: () => ({}),
    dropdownIndicator: (provided) => ({
        ...provided,
        color: '#fff'
    }),
    placeholder: () => ({
        color: '#fff',
        paddingLeft: '1rem',
    }),
    input: (provided) => ({
        ...provided,
        paddingLeft: '1rem'
    }),
  } 
  
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
      styles={customStyles}
    />
  );
}
