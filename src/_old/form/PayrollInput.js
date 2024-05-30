import React, { useState } from 'react';

const PayrollInput = ({ label, id, initialValue, onChange }) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    e.preventDefault();

    const newValue = e.target.value;
    setValue(newValue);
    onChange(newValue);
  };

  const toFixedIfNeeded = (value) => {
    return +parseFloat(value).toFixed(2);
  };

  return (
    <div class="mb-5">
      <label for={id} class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <input
        type="text"
        id={id}
        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        value={toFixedIfNeeded(initialValue)}
        onChange={handleChange}
      />
    </div>
  );
};

export default PayrollInput;
