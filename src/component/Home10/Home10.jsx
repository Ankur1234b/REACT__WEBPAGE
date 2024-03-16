import React from 'react'
import img26 from '../../Image/mics_testimonial-1.jpg'
import img27 from '../../Image/image3-home4.png'
import styles from './Home10.module.css';
export default function Home10() {
  return (
    <div>
      <div className={styles.boxx}>
    <div className={styles.about1}>
      <div> <p className={styles.about}>REAL TESTIMONIALS</p></div>
      <div> <h2 className={styles.about2}>What They Say About<br/><span className={styles.about26}>Our</span> Company?</h2></div>
      <div> <p className={styles.about3}><span className={styles.about22}>“After cycling through multiple SEO </span><span className={styles.about22}>companies and <br/>seeing no results, I</span> <span className={styles.about22}>finally came across SEO. Choosing <br/>to</span><span className={styles.about22}> work with Onum is hands down one of </span><span className={styles.about22}>the best<br/> business investment decisions </span><span className={styles.about22}> have ever made.”</span></p></div>
    <div className={styles.about4}>
    <img className={styles.img26} src={img26}/>
    <div className={styles.about6}>
    <p className={styles.about5}>Taylor Green,</p>
    <p className={styles.about7}>Client of Company</p>
    </div>
    </div>
       </div>
       <img className={styles.img27} src={img27}/>
       
    </div>
    </div>
  )
}
