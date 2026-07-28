import React, { useState } from 'react';
import styles from './AlphabeticalList.module.css';

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const sampleData = {
  A: [
    "HOW TO BECOME AN ACCOUNTANT",
    "HOW TO BECOME AN AGRICULTURE SCIENCE",
    "HOW TO BECOME AN ARCHITECTURE",
    "HOW TO BECOME AN ANIMATION",
    "HOW TO BECOME AN AUTOMOBILE ENGINEERING"
  ],
  B: [
    "HOW TO BECOME A BRAND MANAGER",
    "HOW TO BECOME A BANK MANAGER"
  ]
};

const AlphabeticalList = ({ data = sampleData }) => {
  const [selectedLetter, setSelectedLetter] = useState(null);

  return (
    <section className={styles.listCard}>
      {/* Header Tab */}
      <div className={styles.headerTabContainer}>
        <span className={styles.headerTab}>Sort by A to Z</span>
      </div>

      {/* Alphabet Bar */}
      <nav className={styles.alphabetNav}>
        {alphabet.map((letter) => (
          <button
            key={letter}
            onClick={() => setSelectedLetter(letter)}
            className={`${styles.alphabetBtn} ${
              selectedLetter === letter ? styles.activeBtn : ''
            }`}
          >
            {letter}
          </button>
        ))}
      </nav>

      {/* List Content */}
      <div>
        {Object.entries(data).map(([letter, items]) => (
          <div key={letter} className={styles.letterGroup}>
            <div className={styles.letterBadge}>{letter}</div>

            <div className={styles.itemsList}>
              {items.map((title, index) => (
                <div key={index} className={styles.itemRow}>
                  <span className={styles.itemTitle}>{title}</span>
                  <button className={styles.detailsBtn}>
                    Get More Details
                    <span className={styles.arrowIcon}>&#9654;</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AlphabeticalList;