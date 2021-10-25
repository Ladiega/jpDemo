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
            <p className={styles.test3_p}>VP of Eng @splice —<br/> I <b> build effective distributed eng teams and latino/latam dev communities</b><br/>@colombia_dev, @quecharla, @jsconfco, @rubyconfco, @bogotaJS</p>
          </div>
              
        
          
        </main>
        
    )
}

