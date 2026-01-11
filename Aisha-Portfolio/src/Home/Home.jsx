import { motion } from "framer-motion";
import styles from './Home.module.css';

const Home = () => {
    return (
        <div id='Home' className={styles.homeContainer}>

            {/* Left Image */}
            <motion.div
                className={styles.homeContent1}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <img src="Images/Hero/hero_1.svg" alt="" />
            </motion.div>

            {/* Right Text */}
            <motion.div
                className={styles.homeContent2}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
            >
                <div className={styles.heroTextContainer}>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.4 }}
                    >
                        Elevating the art of pastry with passion and precision. Join me on a journey from home kitchen experiments to professional culinary excellence, crafting desserts that tell a story.
                    </motion.p>

                    <motion.div
                        className={styles.ctaRow}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <button className={styles.btnPrimary}>Learn more</button>
                        <button className={styles.btnSecondary}>BUY PRODUCT</button>
                    </motion.div>
                </div>
            </motion.div>

        </div>
    );
};

export default Home;
