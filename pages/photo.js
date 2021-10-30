import Link from 'next/link'
import styles from '../styles/photo.module.css'
import Nav from '../componets/navbar/index'

import Image from 'next/image'
import photo1 from '../public/img/photo1.png'
import photo2 from '../public/img/photo2.png'

export default function Photo (){
    return(
        <div className={styles.photo_global}>
            <div className={styles.nav_container}>
                <Nav/>
             </div>
             <div className={styles.photo1_container}>
                       
                       <div className={styles.photo1_content}>
                       <div className={styles.photo1_container}>
                       <Image
                       className={styles.photo1}
                       src={photo1}
                       />
                       </div>
              </div>
              <div className={styles.photo1_container}>
                       
                       <div className={styles.photo2_content}>
                       <div className={styles.photo2_container}>
                       <Image
                       className={styles.photo2}
                       src={photo2}
                       />
                       </div>
              </div>


            <div className={styles.photo_container}>
                <div className={styles.header_container}>
                    <div className={styles.text1}>Photography</div>
                    <div className={styles.line1}></div>
                    <div className={styles.text2}>I build effective distributed eng teams and latino/latam dev communities 
                    </div>

                <div className={styles.text3}>
                  <div className={styles.text3_bold}>  Financial District,</div>Manhattan
                </div>
                
                  
                     
                     <div className={styles.date1_container}>
                        <div className={styles.date1_05}>05
                        </div>
                        <div className={styles.date1}>.22.2020
                        </div>
                    </div>
                    <div className={styles.text4}>Distrito Financiero</div>
                    <div className={styles.text5}>Financial District</div>
                    <div className={styles.text6}> Nueva York </div>
                    <div className={styles.text7}>EE. UU.</div>
                    <div className={styles.text8}>I organized my first ever community conference in 2011 in Bogotá, Colombia, while living in NYC. I was thankful for the community-taught (never self-taught).</div>
                   

                </div>

                <div className={styles.text9}>
                  <div className={styles.text9_bold}>  Financial District,</div>Manhattan
                </div>
                
                  
                     
                     <div className={styles.date2_container}>
                        <div className={styles.date2_05}>05
                        </div>
                        <div className={styles.date2}>.22.2020
                        </div>
                    </div>
                    <div className={styles.text10}>Distrito Financiero</div>
                    <div className={styles.text11}>Financial District</div>
                    <div className={styles.text12}> Nueva York </div>
                    <div className={styles.text13}>EE. UU.</div>
                    <div className={styles.text14}>I organized my first ever community conference in 2011 in Bogotá, Colombia, while living in NYC. I was thankful for the community-taught (never self-taught).</div>

                </div> 
                
                
                   

                </div>
                
                

            
            
            
            
            
            
            
            
            </div>
        </div>
    )
    
    
}