import React from 'react'
import img7 from '../../Image/image1-home4.png'
import img8 from '../../Image/gg-rating.png'
import styles from './Home3.module.css';
export default function Home3() {
  return (
    <div className={styles.boxx}>
    <div className={styles.about1}>
      <div> <p className={styles.about}>ABOUT US</p></div>
      <div> <h2 className={styles.about2}>Enjoy Full-Service Digital <br/> Marketing Expertise</h2></div>
      <div> <p className={styles.about3}>Our approach to SEO is <span className={styles.about33}>uniquely built around what  <br/> we</span> know works…and what we know <span className={styles.about34}>doesn’t work.</span></p></div>
      <div> <p className={styles.about4}>Over the years, we have worked with <span className={styles.about36}>Fortune 500s and brand-new <br/> startups. We</span> <span className={styles.about37}>help ambitious businesses like yours</span><span className={styles.about38}> generate more<br/>profits by building </span><span className={styles.about38}>awareness, driving web traffic, connecting </span><span className={styles.about39}>with<br/> customers, and growing overall sales. </span></p></div>
      <img className={styles.img8} src={img8}/>
       </div>
       <img className={styles.img7} src={img7}/>
       
    </div>
  )
}
