import styles from '../nav2/nav2.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import Head from 'next/head'




import jplogob from '../../public/img/jplogob.png'
import x from '../../public/img/x.svg'




import jplogo from '../../public/img/jpicon.svg'
import instalogo from '../../public/img/instaicon.svg'
import twilogo from '../../public/img/twicon.svg'
import hmenulogo from '../../public/img/hmenu.svg'

export default function Nav2(){
    return(
        <div className={styles.global_container}>
            <nav className={styles.nav_container}>
                <div className={styles.jplogo_container} >
                   <Link href="/">
                   <a >
                    <Image
                    className={styles.jplogo}
                    src={jplogo}
                    width={24}
                    height={20}
                    />
                    </a>
                    </Link>
                    </div>
                    <div className={styles.instalogo_container}>
                    <Link href="https://www.instagram.com/buritica/?hl=es">
                    <a >
                    <Image
                    className={styles.instalogo}
                    src={instalogo}
                    width={18}
                    height={18}
                    />
                    </a>
                    </Link>
                    </div>
                    
                    <div className={styles.twilogo_container}>
                   <Link href="https://twitter.com/buritica?lang=es">
                   <a >
                    <Image
                    className={styles.twilogo}
                    src={twilogo}
                    width={20}
                    height={20}
                    />
                    </a>
                    </Link>
                    </div>
                    <div className={styles.hmenulogo_container} >
                    <button type="button" className={styles.hmenu_button}>
                    <Image
                    className={styles.hmenulogo}
                    src={hmenulogo}
                    width={23}
                    height={17}
                    />
                    </button>

                    <div className={styles.menu_open}>
                    <Head>
          
                    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet"/>

                    <link rel="icon" href="/jpicon.ico" />
                    </Head>
           
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
                   <div>
                       <Link href="/blog">
                         <a>📓Blog</a>
                       </Link>
                       
                       <div className={styles.line1}></div>

                       
                   </div>
                   <div>
                       <Link href="/photography">
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
       


        </div>

                    
                    </div>
                    

            </nav>
            
        </div>
    )
}