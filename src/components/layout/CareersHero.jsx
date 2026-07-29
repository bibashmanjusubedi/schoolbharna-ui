import React from 'react';
import styles from './CareersHero.module.css';
// import heroImg from '../../assets/images/CareersHero.png';

const CareersHero = ({ bgImage, className='' }) => {
  console.log("Passed className : ", className);
  return (
    <section 
      className={`${styles.heroSection} ${className}`}
      style = {{ backgroundImage: `url(${bgImage})`}}
    />
  );
};

export default CareersHero;