import styles from '../bio/bio.module.css'

export default function Bio(){
    return(
        <main className={styles.main_container1}>
          <div className={styles.text1}>
            <p className={styles.text1_p}> <b>I`m</b> Juan Pablo</p>
          </div>
          <div className={styles.text2}>
            <p className={styles.text2_p}>Buriticá</p>
          </div>
          <div className={styles.circletext}></div> 
          <div>
            <p></p>
          </div>
          <div className={styles.text3}>
            <p className={styles.test3_p}>VP of Eng @splice —<br/> I <b> build effective<br/>  distributedeng teams <br/>  and latino/latam dev communities</b> @colombia_dev, @quecharla, @jsconfco, @rubyconfco, @bogotaJS</p>
          </div>
              
        
          <div className={styles.text4}>
            <h1 className={styles.text4_h1}>Me</h1>
            <p className={styles.text4_p}>I organized my first ever community conference in 2011 in Bogotá, Colombia, while living in NYC. I was thankful for the community-taught (never self-taught).</p>
            <p><b>05</b> . 22 . 2020</p>
            <p><b>Financial District,</b>  Manhattan</p>
                        
          </div>
          
        </main>
        
    )
}

