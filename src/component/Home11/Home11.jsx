import React from 'react'
import img34 from '../../Image/post-1-750x500.jpg'
import img35 from '../../Image/post-2-750x500.jpg'
import img36 from '../../Image/post-3-750x500.jpg'
import styles from './Home11.module.css';
export default function Home11() {
  return (
    <div className={styles.intro10}>
      <div className={styles.our}>
      <p className={styles.intro1}>OUR BLOG</p>
      <h1 className={styles.intro}>Our Latest Media</h1>
      <p className={styles.intro2}>Our campaigns get your business in front of the right people at the<br/>right time to increase organic traffic and boost engagement.</p>
    </div>
    <div  className={styles.card8}>
    <div className={styles.card} >
    <img className={styles.img34} src={img34}/>
  <div className={styles.card_body}>
  <p><i class="fa-solid fa-user"></i> Tom Black <span className={styles.card1} > <i class="fa-solid fa-clock"></i> November 21, 2019</span></p>
    <h5 className={styles.card_title}>15 SEO Best Practices:<br/> Website Architecture</h5>
    <p className={styles.card_text}>The basic premise of search engine<br/>reputation management is to use the...</p>
  </div>
</div>
  <div className={styles.card} >
    <img className={styles.img35} src={img35}/>
  <div className={styles.card_body}>
  <p><i class="fa-solid fa-user"></i> Tom Black <span className={styles.card1} > <i class="fa-solid fa-clock"></i> November 21, 2019</span></p>
    <h5 className={styles.card_title}>SEO Best Practices: <br/> Mobile Friendliness</h5>
    <p className={styles.card_text}>The basic premise of search engine<br/>reputation management is to use the...</p>
  </div>
</div>
  <div className={styles.card} >
    <img className={styles.img36} src={img36}/>
  <div className={styles.card_body}>
  <p><i class="fa-solid fa-user"></i> Tom Black <span className={styles.card1} > <i class="fa-solid fa-clock"></i> November 21, 2019</span></p>
    <h5 className={styles.card_title}>A Guide to Google SEO <br/>Algorithm Updates</h5>
    <p className={styles.card_text}>The basic premise of search engine<br/>reputation management is to use the...</p>
  </div>
  </div>
</div>

</div>
  )
}
