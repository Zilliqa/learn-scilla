import React from 'react';
import styles from './spinner.module.css';

// Renders spinner to visualize loading status
const Spinner: React.SFC<{}> = () => (
  <div className="py-5 text-center">
    <div className={styles.spinner} />
  </div>
);

export default Spinner;
