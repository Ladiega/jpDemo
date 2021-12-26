import styles from '../background/background.module.css'
import Image from 'next/image'
import jpimg from '../../public/img/jpbground.png'

import Nav from '../navbar/index'
import Footer from '../footer/index'
import Bio from '../bio/bio'
import Bio2 from '../bio2/index'
import Engi from '../engineering/engineering'
import Writing from '../writing/writing'
import Form from '../form/form'

export default function Iphone(){
    return(
        <div className={styles.global_container}>
            
            <div className={styles.background_1}>
                <Image
                    className={styles.buritica_img}
                    src={jpimg} 
                />
            </div>
                        
            <div className={styles.background_2}> <Bio/></div>
                      
            <div className={styles.background_4}><Engi/></div>
               
            <div className={styles.background_3}><Bio2/></div>  

            <div className={styles.background_5}><Writing/></div>
            <div className={styles.background_6}><Form/></div>

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