import Head from 'next/head'
import styles from '../open/open.module.css'
import Image from 'next/image'
import Link from 'next/link'


import jplogob from '../../public/img/jplogob.png'
import x from '../../public/img/x.svg'

export default function Open(){
    return(
        //menu expanded
       <div className={styles.menu_open}>
          
           <div className={styles.background1_container}>
               <div className={styles.header}>
                   <div className={styles.header_jplogo}>
                        <Image
                        src={jplogob}
                        width={35}
                        height={29}
                      
                       />
                   </div>
                   <div className={styles.header_text}>
                       <p>buriticá</p>
                   </div>
                   <div className={styles.header_x}>
                       <button type="button" className={styles.button_x}>
                       <Image
                       src={x}
                       />
                       </button>
                   
                   </div>

               </div>
               
               



               <div className={styles.bg1_text1}>
                   <div className={styles.blog_container}>
                       <div className={styles.blog_text}>
                            <Link href="/blogHome">
                                <a>📓Blog</a>
                            </Link>
                       </div>
                       <div className={styles.line1}></div>

                       
                   </div>
                   <div>
                       <Link href="/photo">
                        <a>📸Photogrophy</a>
                       </Link>
                      
                       <div className={styles.line2}></div>
                   </div>
                   <div className={styles.text_bottom}>
                       <Link href="/community">
                        <a>🤔Community</a>
                       </Link>
                       
                   </div>

               </div>

           </div>


           <div className={styles.background2_container}>
               <div className={styles.text1}>
                   <p>Hi!</p>
               </div>

               <div className={styles.text2}>
                   <p>j@buriti.ca</p>
               </div>

               <div className={styles.line3}></div>

               <div className={styles.text3}>
                   <p>My work</p>
               </div>
                                    
            </div>
            <div className={styles.footer_container}>
                <div className={styles.text4}>
                    <p>Eng Leadership, Software, Startups, JavaScript and other exploits.</p>
                </div>

                <div className={styles.line4}></div>

                <div className={styles.text5}>
                   <p>Financial District, Manhattan</p>
                </div>
                <div className={styles.text6}>
                    <p>26. 05 . 2020</p>
                </div>
                    
                
            </div>
            <div>
              

            </div>
       


        </div>
    )
}