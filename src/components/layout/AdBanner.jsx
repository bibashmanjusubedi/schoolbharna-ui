import React from 'react';
import styles from './AdBanner.module.css';

const AdBanner = ({ imageUrl, linkUrl }) => {
  return (
    <aside className={styles.adContainer}>
      <div className={styles.adCard}>
        <a href={linkUrl || "#"} target="_blank" rel="noopener noreferrer">
          <img 
            src={imageUrl || "https://via.placeholder.com/300x400"} 
            alt="Advertisement" 
            className={styles.adImage}
          />
        </a>
      </div>
    </aside>
  );
};

export default AdBanner;