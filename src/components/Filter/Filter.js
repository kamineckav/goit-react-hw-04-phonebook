import React, { Component } from 'react';
import styles from './Filter.module.css';

class Filter extends Component {
  render() {
    const { filter, onFilterChange } = this.props;
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
  }
}

export default Filter;
