import styles from '../engineering/engi.module.css'

export default function Engi(){
    return(
        <main className={styles.main_container2}>
          <div className={styles.container2_h1}>
            <h1>Engineering</h1>
          </div>
          <div className={styles.container2_p}>
            <p>I organized my first ever community conference in 2011 in Bogotá, Colombia, while living in NYC. I was thankful for the community-taught (never self-taught).</p>
          </div>
          <div className={styles.container2_date}>
            <p><b>05</b> . 22 . 2020                
            <br/><b>Financial District,</b> Manhattan</p>
          </div>

      </main>
    )
}