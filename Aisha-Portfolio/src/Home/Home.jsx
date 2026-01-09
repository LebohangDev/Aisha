
import React from 'react';
import styles from './Home.module.css';

const Home = () => {
    return (

        <>

            <div id='Home' className={styles.homeContainer}>
                <div className={styles.homeContent1}>
                    <img src="Images/Hero/hero_1.svg" alt="" />
                </div>
                <div className={styles.homeContent2}>
                    <div className={styles.imageContainer}>
                        <img src="Images/Asim/Asim_Hero.png" alt="" />
                    </div>
                    <div className={styles.heroTextContainer}>
                        <p>
                            Elevating the art of pastry with passion and precision. Join me on a journey from home kitchen experiments to professional culinary excellence, crafting desserts that tell a story.
                        </p>
                        <div className={styles.ctaRow}>
                            <button className={styles.btnPrimary}>Learn more</button>
                            <button className={styles.btnSecondary}>BUY PRODUCT</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Home;
