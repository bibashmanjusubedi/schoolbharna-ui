import React from 'react';
import AlphabeticalList from './AlphabeticalList';
import AdBanner from './AdBanner';
import styles from './CareerGuideDirectory.module.css';
import Ad from '../../assets/images/Ad.png'

const CareerGuideDirectory = () => {
    return(
        <main className={styles.directoryContainer}>
            {/* Left main component */}
            <AlphabeticalList />

            {/* Right ad component */}
            <AdBanner
                imageUrl = {Ad}
                linkUrl = "https://example.com"
            /> 
        </main>
    );
};


export default CareerGuideDirectory;