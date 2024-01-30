import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ filter, onFilterChange }) => {
  return (
    <input
      className={styles.filterInput}
      type="text"
      name="filter"
      placeholder="Search contacts..."
      value={filter}
      onChange={onFilterChange}
    />
  );
};

export default Filter;
