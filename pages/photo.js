import Link from 'next/link'
import styles from '../styles/photo.module.css'
import Nav from '../componets/navbar/index'
export default function Photo (){
    return(
        <div className={styles.photo_global}>
            <div className={styles.nav_container}>
                <Nav/>
             </div>
            <div className={styles.photo_container}>
                <div className={styles.header_container}>
                    <div className={styles.text1}>Photography</div>
                    <div className={styles.line1}></div>
                    <div className={styles.text2}>I build effective distributed eng teams and latino/latam dev communities </div>
                </div>
                

            
            
            
            
            
            
            
            
            </div>
        </div>
    )
    
    
}