import React from 'react'

function FilterButton({ isActive, onClick, children }) {
    const baseStyle = "py-2 px-4 rounded-lg font-medium text-sm transition-colors duration-300";
    const activeStyle = "bg-softBlue text-white hover:bg-softBlue-dark";
    const inactiveStyle = "text-gray-600 bg-white hover:bg-gray-100 hover:text-gray-900";
  
    return (
      <button
        onClick={onClick}
        className={`${baseStyle} ${isActive ? activeStyle : inactiveStyle}`}
      >
        {children}
      </button>
    );
}

export default FilterButton