import React from 'react'
import img18 from '../../Image/image2-home4.png'
import styles from './Home7.module.css';
export default function Home7() {
  return (
    <div className={styles.box}>
       <img className={styles.img18} src={img18}></img>  
       <div className={styles.box1}>
        <p className={styles.box2}>OUR BENEFITS</p>
        <h1 className={styles.box3}><span className={styles.box33}>Grow Your Business <br/>with</span> <span className={styles.box34}>Our Marketing Agency</span></h1>

       <div className={styles.box8}>
       <div className={styles.boc1}>
       <p className={styles.box4}>01.</p>
        <p className={styles.box5}>PPC Advertising</p>
        <p className={styles.box6}><span className={styles.box66}>Target your ideal search phrases <br/>and</span> <span className={styles.box67}>get found at the top of <br/>  search results. </span><span/><span className={styles.box68}>PPC allows you.</span></p>
        
       </div>
       <div className={styles.boc2}>
       <p className={styles.box4}>02.</p>
        <p className={styles.box5}>Web Development</p>
        <p className={styles.box6}>Your website has to impress your<br/><span className={styles.box66}>visitors within just a few seconds. <br/>  If it</span> <span className={styles.box66}>runs slow, if it feels outdated.</span></p>
        </div>
       
</div>
<div className={styles.box8}>
       <div className={styles.boc1}>
       <p className={styles.box4}>03.</p>
        <p className={styles.box5}>Media Managment</p>
        <p className={styles.box6}><span className={styles.box66}>Create, publish, and promote <br/>engaging </span><span className={styles.box66}>content to generate <br/>  and build a</span><span className={styles.box66}> dedicated<br/>community.</span></p>
       </div>
       

       <div className={styles.boc6}>
       <p className={styles.box4}>04.</p>
        <p className={styles.box5}>Keyword Research</p>
        <p className={styles.box6}><span className={styles.box66}>We select themed keywords  <br/>based on</span> <span className={styles.box66}>user-intent to solidify <br/> rankings based on</span><span className={styles.box66}> what users<br/>searches</span></p>
       </div>
       </div>
</div>
    </div>

  )
}
