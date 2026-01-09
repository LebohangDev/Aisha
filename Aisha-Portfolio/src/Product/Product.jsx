import React, { useState } from 'react';
import styles from './Product.module.css';

const Product = () => {



    const benefitsItems = [
        {
            icon: "ri-restaurant-line",
            description:
                "Learn the core pastry techniques professionals rely on, explained in a clear, beginner-friendly way.",
        },
        {
            icon: "ri-cake-2-line",
            description:
                "Stop guessing why one batch works and the next doesn’t. You’ll build a repeatable method so your desserts come out reliable every time.",
        },
        {
            icon: "ri-knife-line",
            description:
                "Master the small details that make desserts look expensive — clean edges, smooth finishes, and elegant presentation.",
        },
        {
            icon: "ri-timer-flash-line",
            description:
                "You’ll organize your process like a pro so you’re not scrambling mid-bake. Faster prep and fewer mistakes.",
        },
        {
            icon: "ri-line-chart-line",
            description:
                "You’ll know what to do when something goes wrong and how to fix it without panicking.",
        },
    ];

    const [email, setEmail] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);

    const productInfo = {
        title: "Asim Swati Business Masterclass",
        amount: 399,
        currency: "USD",
        successUrl: "https://lebohangdev.github.io/Asim_Portfolio/?payment=success",
        cancelUrl: "https://lebohangdev.github.io/Asim_Portfolio/?payment=cancel",


    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleEmailChange = (e) => {
        const val = e.target.value;
        setEmail(val);
        setIsEmailValid(validateEmail(val));
    };

    // pass the selected plan from user
    async function handleZinnaPayment() {
        try {

            const productPayload = {
                amount: productInfo.amount,
                currency: productInfo.currency,
                title: productInfo.title,
                email: email,
                successUrl: productInfo.successUrl,
                cancelUrl: productInfo.cancelUrl,

            }

            const res = await fetch('https://asim-portfolio-backend.onrender.com/api/create-payment-intent', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(productPayload),

            });
            console.log(productPayload);

            const data = await res.json()
            window.location.href = data.redirect_url;

            console.log("redirect url:", data.redirect_url)



        } catch (e) {
            console.error("failed to send request to create payment session for user:", e)



        }






    }
    return (
        <div id="Product" className={styles.ProductContainer}>

            <div className={styles.ProductHeader}>
                <div className={styles.ProductHeaderContainer}>
                    <div className={styles.ProductHeaderContent}>
                        <h1>Pastry Pro Path</h1>
                        <p>For bakers who want more that receipes, this is the craft</p>
                    </div>
                </div>
            </div>


            <div className={styles.ProductContent}>
                <div className={styles.ProductContentContainer}>
                    <div className={styles.ProductContentHeader}>
                        <h1>Ebook</h1>
                    </div>

                    <div className={styles.ProductContentBody}>
                        <h1>From Home-Level to Chef-Level Pastry</h1>
                        <p>Learn the exact fundamentals and finishing techniques that separate “homemade” from “chef-made”, with structured guidance to improve texture, consistency, plating, and overall quality.</p>
                        <div className={styles.ProductContentBodyButton}>
                            <input
                                type="email"
                                className={styles.emailInput}
                                placeholder="Enter your email address"
                                value={email}
                                onChange={handleEmailChange}
                            />
                            <button disabled={!isEmailValid} onClick={() => { handleZinnaPayment(); setEmail(''); }}>GET STARTED NOW!</button>
                        </div>
                        <div className={styles.ProductContentPrice}>
                            <div className={styles.price}>
                                <p>Price</p>
                                <p>{productInfo.amount}$</p>
                            </div>
                            <div className={styles.why}>
                                <p>Why het this Ebook?</p>
                                <i class="ri-arrow-down-circle-line"></i>

                            </div>

                        </div>
                    </div>

                </div>
                <div className={styles.ProductContentEbook}>
                    <img src="Images/Ebook/ebook.svg" alt="" />
                </div>



            </div>
            <div className={styles.ProductLearnContainer}>
                <div className={styles.ProductLearnHeader}>
                    <div className={styles.title}>
                        <h1>Benefits</h1>
                        <p>Not just recipes, real pastry skills that upgrade your desserts, your process, and your confidence in the kitchen.</p>

                    </div>
                    <button>Order ebook<i class="ri-shopping-bag-3-line"></i></button>
                    <img src="Images/benefits.svg" alt="" />

                </div>
                <div className={styles.ProductLearnGrid}>
                    {benefitsItems.map((item, index) => (
                        <div key={index} className={styles.ProductLearnGridItem}>
                            <i className={item.icon}></i>
                            <p>{item.description}</p>
                        </div>
                    ))}

                </div>
            </div>


        </div>
    );
};

export default Product;
