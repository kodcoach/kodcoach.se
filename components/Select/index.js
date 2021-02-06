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
    option: (provided) => ({
      ...provided,
      color: '#333',
      textAlign: 'left',
      paddingLeft: '1em',
    }),
    control: (provided) => ({
        ...provided,
        borderColor: '#333',
        padding: '0'
    }),
    valueContainer: (provided) => ({
        ...provided,
        padding: '0'
    }),
    singleValue: (provided) => ({
        ...provided,
        paddingLeft: '1em',
        marginLeft: '0'
    }),
    clearIndicator: (provided) => ({
      ...provided,
      color: '#333'
    }),
    indicatorSeparator: () => ({}),
    dropdownIndicator: (provided) => ({
        ...provided,
        color: '#333'
    }),
    placeholder: () => ({
        color: '#333',
        paddingLeft: '1rem',
    }),
    input: (provided) => ({
        ...provided,
        paddingLeft: '1rem'
    }),
    option: (provided, state) => ({
        ...provided,
        background: state.isFocused ? '#8a5cf6' : '#fff',
        color: state.isFocused ? '#fff' : '#333' 
    })
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
