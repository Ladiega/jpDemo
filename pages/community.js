import Link from 'next/link'
import Nav from '../componets/navbar/index'
import styles from '../styles/comm.module.css'

export default function Comm (){
    return(
        <div className={styles.comm_glabal}>
            <Nav/>
            <div className={styles.comm_bcontainer}>

                <div className={styles.text1}>Community</div>
                <div className={styles.line1}></div>
                <div className={styles.text2}>I build effective distributed eng teams</div>
                <div className={styles.text3}>and latino/latam dev communities</div>
                <div className={styles.text4}>I organized my first ever community conference in 2011 in Bogotá, Colombia, while living in NYC. I was thankful for the community-taught (never self-taught).</div>
                <div className={styles.date}>
                    <div className={styles.date1_05}>05</div>
                    <div className={styles.date1}>. 22 . 2020</div>
                </div>
                <div className={styles.f_container}>
                <div className={styles.text5}>Financial District</div>
                <div className={styles.text6}>, Manhattan</div>
                </div>    



            </div>
            
            <div className={styles.comm_wcontainer}>
                
                <div className={styles.w_container}>
                   
                    <div className={styles.text7}>
                        I organized my first ever community conference in 2011 in Bogotá, Colombia, while living in NYC. I was thankful for the community-taught (never self-taught).
                    </div>
                    <div className={styles.date2}>
                        <div className={styles.date2_05}>
                        05
                        </div>
                        <div className={styles.date_2}>
                        . 22 . 2020   
                    </div>
                    </div>
                    <div className={styles.f2_container}>
                    <div className={styles.text8}>Financial District</div>
                    <div className={styles.text9}>, Manhattan</div>
                    </div>
            
            
            </div>
            </div>
            
            
        </div>
    )
}