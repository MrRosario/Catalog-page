import React from "react";
import styles from "./Filter.module.css";

type props = {
  label: string;
  options: string[];
  setCategory: (category: string) => void;
  category: string;
};

const Filter = ({ label, options, setCategory, category }: props) => {
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };
  return (
    <div className={styles.filterWrapper}>
      <label className={styles.filterLabel} htmlFor={label}>
        {label}
      </label>
      <select
        className={styles.filterSelectInput}
        name={label}
        onChange={handleSelect}
      >
        <option defaultValue={category} disabled value={category}>
          {category}
        </option>
        {options.map((option: string, index: number) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
