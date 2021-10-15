import styles from '../styles/iphone.module.css'
import Image from 'next/image'

import jpimg from '../public/img/jpbground.png'

import Nav from '../componets/navbar/index'
import Footer from '../componets/footer/index'
import Bio from '../componets/bio/bio'
import Bio2 from '../componets/bio2/index'

export default function Iphone(){
    return(
        <div className={styles.global_container}>
            
            <div className={styles.background_1}>
                <Image
                    className={styles.buritica_img}
                    src={jpimg} 
                />
            </div>
                        
            <div className={styles.background_2}><Bio /></div>
                      
            <div className={styles.background_4}></div>
               
            <div className={styles.background_3}>
            <Bio2/>
            </div>  

            <div className={styles.background_5}></div>
            <div className={styles.background_6}> </div>

            <div className={styles.background_7}>
            <Nav 
            className={styles.nav}
            />              
            </div>
            
            <div className={styles.background_8}>
                <Footer
                className={styles.footer}
                />
            </div>
           
           
            

            

        </div>
    )

}