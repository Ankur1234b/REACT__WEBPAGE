import React from 'react'
import img15 from '../../Image/service1-home4.png'
import img16 from '../../Image/service2-home4.png'
import img17 from '../../Image/service3-home4.png'
import styles from './Home6.module.css';
export default function Home6() {
  return (
  <div className={styles.card1}>
        <div className={styles.card}>
            <img className={styles.img15} src={img15}></img>  
            <h5 className={styles.card_title}>All Sizes Business</h5>
            <p className={styles.card_text}><span className={styles.card_text4}>You can provide the</span><span className={styles.card_text5}> answers that <br/>your</span><span className={styles.card_text6}> potential customers are </span><span className={styles.card_text7}>trying<br/> to find, so you can </span><span className={styles.card_text8}>become the<br/> industry.</span></p>
            <div className={styles.number_container}>
            <button className={styles.Orange} >Learn More</button>
            </div>
            </div>
            <div className={styles.card}>
            <img className={styles.img16} src={img16}></img>  
            <h5 className={styles.card_title}>Awesome Results</h5>
            <p className={styles.card_text}><span className={styles.card_text4}>Create and manage top-</span><span className={styles.card_text5}>performing <br/>social</span> <span className={styles.card_text5}></span><span className={styles.card_text6}>campaigns and start</span><span className={styles.card_text7}><br/> developing a dedicated</span> <span className={styles.card_text8}>customer<br/>fan base.</span></p>
            <div className={styles.number_container}>
            <button className={styles.Orange} >Learn More</button>
            </div>
            </div>
            <div className={styles.card3}>
            <img className={styles.img17} src={img17}></img>  
            <h5 className={styles.card_title}>Significant ROI</h5>
            <p className={styles.card_text}><span className={styles.card_text4}>Get more website traffic,</span><span className={styles.card_text5}> more <br/>customers, and</span><span className={styles.card_text6}> more online visibility<br/> with</span><span className={styles.card_text6}> powerful SEO services.</span></p>
            <div className={styles.number_container}>
            <button className={styles.Orange} >Learn More</button>
            </div>
            </div>
</div>      
           
  )
}
