

import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import styles from './Gallery.module.css';

const Gallery = () => {

    // Define animation variant locally
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const images = [
        { src: "Images/Pastries/pastry_1.png", title: "Rose Cake" },
        { src: "Images/Pastries/pastry_2.png", title: "Crimson Berry Cloud" },
        { src: "Images/Pastries/pastry_3.png", title: "Chocolate Cake" },
        { src: "Images/Pastries/pastry_4.png", title: "Chocolate Caramel Tar" },
        { src: "Images/Pastries/pastry_5.png", title: "Saffron Tartlet" },
        { src: "Images/Pastries/pastry_6.png", title: "Dôme Clémentine" },
        { src: "Images/Pastries/pastry_7.png", title: "Éclair Élégance" },
        { src: "Images/Pastries/pastry_8.png", title: "Blackberry Pistachio Royale" },
        { src: "Images/Pastries/pastry_9.png", title: "Mini Baba au Rhum" },
        { src: "Images/Pastries/pastry_10.png", title: "Patel De Nata" },
        { src: "Images/Pastries/pastry_11.png", title: "Tiramisu" },
        { src: "Images/Pastries/pastry_12.png", title: "Pinacolada" },
        { src: "Images/Pastries/pastry_13.png", title: "Panacota" },
        { src: "Images/Pastries/pastry_14.png", title: "Noir Berry Entremet" },
        { src: "Images/Pastries/pastry_15.png", title: "Strawberry Tart" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageWidth, setImageWidth] = useState(300);


    useEffect(() => {
        const updateWidth = () => {
            if (window.innerWidth <= 480) {

                setImageWidth(170);
            } else if (window.innerWidth <= 768) {

                setImageWidth(270);
            } else if (window.innerWidth <= 1024) {

                setImageWidth(270);
            } else {
                setImageWidth(300);
            }
        };

        // Initial call
        updateWidth();

        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    useEffect(() => {

        const timer = setInterval(() => {
            setCurrentIndex(c => (c + 1) % images.length);
            if (currentIndex == images.length - 1) {
                setCurrentIndex(0);
            }
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div id="Gallery" className={styles.galleryContainer}>
            <motion.div
                className={styles.GalleryHeader}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <h1>A GALLERY OF MY ACTIVITIES</h1>
                <hr />
            </motion.div>
            <motion.div
                className={styles.ActivitiesContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >

                <motion.div
                    className={styles.ImagesContainer}

                    animate={{ x: `-${currentIndex * imageWidth}px` }}
                    transition={{ ease: "easeInOut", duration: 0.5 }}
                >
                    {images.map((image, index) => (
                        <div className={styles.imageCardContainer} key={index}>
                            <img src={image.src} alt={`Pastries ${index + 1}`} loading="lazy" decoding="async" />
                            <div className={styles.imageOverlay} onClick={() => setCurrentIndex(index)}>
                                <p>{image.title}</p>
                            </div>
                        </div>

                    ))}
                </motion.div>


                <div className={styles.dotsContainer}>
                    {images.map((__, index) => (

                        <span
                            key={index}
                            className={index === currentIndex ? styles.activeDot : ''}

                        >
                        </span>
                    ))}
                </div>

            </motion.div>




        </div >
    );
};

export default Gallery;

