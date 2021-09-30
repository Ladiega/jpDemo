import styles from '../styles/background.module.css'
import Nav from '../componets/navbar'
import Footer from '../componets/footer'
import Image from 'next/image'
import jpimg from '../public/img/jpbground.png'



export default function Background(){
    return(
        <div className = {styles.background_container}>
           
            <div className = {styles.jpimg_container}>
                <Image
                 className = {styles.jpphoto}
                 src = {jpimg}
                
                />
            </div>
            <div className={styles.wcircle}> 
            
            </div>
            <div className={styles.bcircle}> 
            
            </div>
            <div className={styles.rectangle}>

            </div>
            

        </div>
    )
}