import React from 'react'
import styles from './Home2.module.css';
export default function Home2() {
    return (
        <div className={styles.card_main}>
        <div className={styles.card}>
            {/* <img src="..." class="card-img-top" alt="..."></img>   */}
            <h5 className={styles.card_title}>Social Media Marketing</h5>
            <p className={styles.card_text}>Create and manage top-performing <br/> social campaigns and start.</p>
            <div className={styles.number_container}>
                <h1 className={styles.numberText}>01</h1>
            </div>
             </div>

             <div className={styles.card1}>
            {/* <img src="..." class="card-img-top" alt="..."></img>   */}
            <h5 className={styles.card_title}>App Development</h5>
            <p className={styles.card_text}>Create, publish, and promote <br/>engaging content to generate more<br/>traffic.</p>
            <div className={styles.number_container}>
                <h1 className={styles.numberText}>02</h1>
            </div>
             </div>

             <div className={styles.card}>
            {/* <img src="..." class="card-img-top" alt="..."></img>   */}
            <h5 className={styles.card_title}>SEO Optimization</h5>
            <p className={styles.card_text}>Get more website traffic, more <br/> customers, and more online visibility.</p>
            <div className={styles.number_container}>
                <h1 className={styles.numberText}>03</h1>
            </div>
             </div>

             <div className={styles.card}>
            {/* <img src="..." class="card-img-top" alt="..."></img>   */}
            <h5 className={styles.card_title}>Content Marketing</h5>
            <p className={styles.card_text}>You can provide the answers that <br/>your potential customers are trying .</p>
            <div className={styles.number_container}>
                <h1 className={styles.numberText}>04</h1>
            </div>
             </div>

        </div>

    )
}
