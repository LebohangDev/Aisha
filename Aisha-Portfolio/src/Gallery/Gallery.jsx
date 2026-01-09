import React from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import styles from './Gallery.module.css';

const Gallery = () => {

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

    return (
        <div id="Gallery" className={styles.galleryContainer}>
            <div className={styles.GalleryHeader}>
                <hr />
                <h1>My Curated Gallery </h1>


            </div>
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 3 }}
            >
                <Masonry gutter="1.5rem">
                    {images.map((image, i) => (
                        <div key={i} className={styles.imageWrapper}>
                            <img
                                src={image.src}
                                alt={`pastry_${i + 1}`}
                            />
                            <p>{image.title}</p>
                        </div>
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    );
};

export default Gallery;
