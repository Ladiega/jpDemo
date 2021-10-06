import styles from '../background/background.module.css'
import Image from 'next/image'
import jpimg from '../../public/img/jpbground.png'

import Nav from '../navbar/index'
import Bio from '../bio/bio'
import Engi from '../engineering/engineering'
import Writing from '../writing/writing'
import Form from '../form/form'
import Footer from '../footer/index'





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
                <div>
                   <Bio></Bio>
                </div> 
                
                    
                    <div className={styles.background2}> 
                    <Engi></Engi>
                    
                    </div>
                    <div className={styles.background5}>

                    </div>
                    <div className={styles.background3}>
                          <Writing className={styles.background3_writing}></Writing>   
                    
                    </div>
                    
                    <div className={styles.background4}>  
                    <Form className={styles.background4_form}></Form>

                    </div>
                  
                    <Footer></Footer>

                
            </div>
    )
}