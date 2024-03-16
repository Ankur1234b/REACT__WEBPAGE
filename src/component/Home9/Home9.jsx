import React from 'react'
import img23 from '../../Image/pricing1-home4.png'
import img24 from '../../Image/pricing2-home4.png'
import img25 from '../../Image/pricing3-home4.png'
import styles from './Home9.module.css';
export default function Home9() {
  return (
    <div>
    <div className={styles.our}>
      <p className={styles.intro1}>CHOOSE YOUR PLAN</p>
      <h1 className={styles.intro}>Flexible Pricing Plans</h1>
      <p className={styles.intro2}>We have experience working with large and small businesses and are ready to<br/>develop a targeted strategy and plan that’s just right for you.</p>
    </div>
        <div className={styles.card1}>
        <div className={styles.card}>
            <img className={styles.img23} src={img23}></img>  
            <h1 className={styles.card_title}>$ 69.99</h1>
            <p className={styles.card_text}>Monthly Package</p>
            <div className={styles.divider}></div>
            <div className={styles.c1}>
            <p className={styles.ca}>Social Media Marketing</p>
            <p className={styles.ca}>2.100 Keywords</p>
            <p className={styles.ca}>One Way Link Building</p>
            <p className={styles.ca}>5 Free Optimization</p>
            <p className={styles.ca}>3 Press Releases</p>
            </div>
            <div className={styles.number_container}>
            <button className={styles.Orange} >Choose Plane</button>
            </div>
            </div>
            <div className={styles.card2}>
            <img className={styles.img24} src={img24}></img>  
            <h1 className={styles.card_title1}>$ 79.99</h1>
            <p className={styles.card_text}>Monthly Package</p>
            <div className={styles.divider}></div>
            <div className={styles.c1}>
            <p className={styles.ca}>Social Media Marketing</p>
            <p className={styles.ca}>3.100 Keywords</p>
            <p className={styles.ca}>One Way Link Building</p>
            <p className={styles.ca}>10 Free Optimization</p>
            <p className={styles.ca}>5 Press Releases</p>
            </div>
            <div className={styles.number_container}>
            <button className={styles.Orange1} >Choose Plane</button>
            </div>
            </div>
            <div className={styles.card}>
            <img className={styles.img25} src={img25}></img>  
            <h1 className={styles.card_title2}>$ 89.99</h1>
            <p className={styles.card_text}>Monthly Package</p>
            <div className={styles.divider}></div>
            <div className={styles.c1}>
            <p className={styles.ca}>Social Media Marketing</p>
            <p className={styles.ca}>5.100 Keywords</p>
            <p className={styles.ca}>One Way Link Building</p>
            <p className={styles.ca}>15 Free Optimization</p>
            <p className={styles.ca}>10 Press Releases</p>
            </div>
            <div className={styles.number_container}>
            <button className={styles.Orange2} >Choose Plane</button>
            </div>
            </div>
</div>   
    </div>
  )
}
