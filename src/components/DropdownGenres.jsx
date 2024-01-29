// DropdownButton.js
import React from 'react';

const DropdownButton = ({ label, isOpen, toggleDropdown }) => {
    return (
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" type="button" className="flex items-center justify-between w-full p-3 font-sans text-xl antialiased font-semibold leading-snug text-left transition-colors border-b-0 select-none border-b-blue-gray-100 text-blue-gray-700 hover:text-blue-gray-900" onClick={toggleDropdown}>
            <span className="block mr-auto font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900">
            {label}
            </span>
            <span className="ml-4">
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
            </span>
        </button>
    );
};

export default DropdownButton;
