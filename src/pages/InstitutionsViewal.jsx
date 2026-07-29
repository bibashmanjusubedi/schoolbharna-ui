// import './InstitutionsViewal.css';
import Navbar from '../components/layout/Navbar';
import CareersHero from '../components/layout/CareersHero';
import institutionHeroImg from '../assets/images/InstitutionsHero.png';
import styles from './InstitutionsViewal.module.css';

export default function InstitutionsViewal(){
    return(
        <>
            <Navbar />
            <CareersHero bgImage={institutionHeroImg} className={styles.institutionsHero}/>
        </>
    );
}