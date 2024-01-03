// Import necessary dependencies
import React from 'react';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const {  i18n } = useTranslation();

  // Language options
  const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'ar', label: 'العربية' },
  ];

  // Change language function
  const changeLanguage = (selectedOption) => {
    i18n.changeLanguage(selectedOption.value);
  };

  // Custom styles for react-select
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: '2px solid #6366F1', // Border color
      borderRadius: '8px',
      boxShadow: state.isFocused ? '0 0 0 2px #4115BA' : 'none', // Add box shadow on focus
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#4115BA' : 'white', // Background color for selected option
      color: state.isSelected ? 'white' : '#111827', // Text color
    }),
  };

  return (
    <div>
      <Select
        options={languageOptions}
        defaultValue={languageOptions.find((option) => option.value === i18n.language)}
        onChange={changeLanguage}
        styles={customStyles}
      />
    </div>
  );
};

export default LanguageSelector;