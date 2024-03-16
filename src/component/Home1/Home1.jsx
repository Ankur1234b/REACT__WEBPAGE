import React from 'react'
import img2 from '../../Image/header-home4.png'
import img3 from '../../Image/twitter-icon.webp'
import img4 from '../../Image/06-facebook-512.webp'
import img5 from '../../Image/linkdlin.png'
import img6 from '../../Image/instagram.png'
import styles from './Home1.module.css';
export default function Home1() {
  return (
    <div className={styles.headerhome4}>
      <img className={styles.img2} src={img2}/>
      <div className={styles.h2}>
      <div className={styles.h1}>
        <p className={styles.tag1}>OUR EXPERIENCE BOOST YOUR BUSINESS</p>
        <h1 className={styles.tag2}>Top Rated Online<br/><span className={styles.tag67}>Marketing <br/> Company</span></h1>
        <p className={styles.tag3}>We bet you don’t spend much time on the 2nd page of <br/> Google – so why should your website?</p>
        <button className={styles.Orange} >Start Now</button>
        </div>
        <div className={styles.box}>
        <div> <img className={styles.img3} src={img3}/></div>
        <div> <img className={styles.img4} src={img4}/></div> 
        <div> <img className={styles.img5} src={img5}/></div> 
        <div> <img className={styles.img6} src={img6}/></div> 
        </div>
      </div>
    </div>
  )
}
