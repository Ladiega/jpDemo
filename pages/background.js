import styles from '../styles/background.module.css'
import Image from 'next/image'
import jpimg from '../public/img/jpbground.png'
import Footer from '../componets/footer/index'
import Nav from '../componets/navbar/index'



export default function Background(){
    return(
            <div className={styles.background_container}>
                
                <div className = {styles.background1}>
                
                    
                        <Image
                        className = {styles.jpphoto}
                        src = {jpimg}
                        
                        />
                </div>
                <Nav></Nav>    
                    
                    <div className={styles.background2}> 
                    
                    </div>
                    <div className={styles.background5}>

                    </div>
                    <div className={styles.background3}> 
                    
                    </div>
                    
                    <div className={styles.background4}>

                    </div>
                    <Footer></Footer>

                
            </div>
    )
}