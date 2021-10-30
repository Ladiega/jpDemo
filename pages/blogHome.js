import styles from '../styles/bloghome.module.css'
import Link from 'next/link'
import Head from 'next/head'

import Image from  'next/image'

import jplogob from '../public/img/jplogob.svg'
import instalogob from '../public/img/instaiconb.svg'
import twilogob from '../public/img/twilogob.svg'
import hmenub from '../public/img/hmenub.svg'

import instalogo from '../public/img/instaicon.svg'
import twilogo from '../public/img/twicon.svg'
import jplogo from '../public/img/jpicon.svg'

export default function bloghome(){
    return(
        <div className={styles.bloghome_container}>
            <Head>
            <link rel="icon" href="/jpicon.ico" />
            </Head>

          <div className={styles.bloghome_content}> 
            <div className={styles.blog_nav}>
              
                <div className={styles.jpicon_container}>
                    <Link href="/">
                    <Image
                    className={styles.jpicon}
                    src={jplogob}
                    />
                    </Link>
                </div>
                <div className={styles.buritica}>buriticá</div>
                <div className={styles.instalogo_container}>
                <Link href="https://www.instagram.com/buritica/?hl=es">
                    <Image
                     className={styles.instalogo}
                     src={instalogob}                    
                    />
                    </Link>

                </div>
                <div className={styles.twilogo_container}>
                    <Link href="https://twitter.com/buritica?lang=es">
                     <Image
                     className={styles.twilogo}
                     src={twilogob}
                     />   
                     </Link>
                </div>
                <div className={styles.hlogo_container}>
                    <button className={styles.hmenulogob}>
                    <Image
                    className={hmenub}
                    src={hmenub}
                    />
                    </button>
                </div>
            </div>
                <div className={styles.blog_content}>
                    <div className={styles.blog}>📓 Blog</div>
                    <div className={styles.line1}></div>
                    <div className={styles.text1}>I build effective distributed eng teams and latino/latam dev communities</div>
                    <div className={styles.blog1}>
                        <div className={styles.date}><div className={styles.five}>05</div>  . 22 . 2020</div>
                        <div className={styles.text2}>Announcing </div>
                        <div className={styles.text3}>The Empanada Fund</div>
                        <div className={styles.text4}>TL;DR I’m announcing the creation of a new fund to sponsor community software conferences in Latin-America and provide scholarships for</div>
                        <div className={styles.text5}>Read more...</div>
                        <div className={styles.dot1}></div>
                    </div>
                    <div className={styles.blog2}>
                    <div className={styles.line2}></div>
                    <div className={styles.date2}> <div className={styles.five2}>05</div>  . 22 . 2020</div>
                    <div className={styles.text6}>6 Lessons </div>
                    <div className={styles.text6_2}>I learned while implementing technical RFCs as a decision making tool</div>
                    <div className={styles.text7}>As an engineering leader, I value trust and believe that individual contributors should be involved in architectural and high level technical decision making.</div>
                    <div className={styles.text8}>Read more...</div>
                    <div className={styles.dot2}></div>
                   </div>

                   <div className={styles.blog3}>
                   <div className={styles.date3}> <div className={styles.five3}>05</div>  . 22 . 2020</div>
                    <div className={styles.text9}>How we’re changing Colombia </div>
                    <div className={styles.text9_2}>through Open Source communities — and why we need your help</div>
                    <div className={styles.text10}>TL;DR — organizing conferences in a developing nation is very hard, and as much as we’ve tried to hit our financial goals, we need some community ❤. Read below a story of how OSS communities have grown in our country, despite the challenges, and/or buy a sticker or a t-shirt and so we can meet our objectives.

                    </div>
                    <div className={styles.text11}>Read more...</div>
                    <div className={styles.dot4}></div>

                   </div>

                </div>

            </div>    
            
            <div className={styles.blogfooter_container}>
                <div className={styles.footer_container}>

                
                <div className={styles.winsta_logo}>
                    <Link href="https://www.instagram.com/buritica/?hl=es">
                    <Image
                    className={styles.instalogo}
                    src={instalogo}
                    />
                    </Link>
                </div>
                <div className={styles.wtwi_logo}>
                <Link href="https://twitter.com/buritica?lang=es">
                    <Image
                    className={styles.wtwilogo}
                    src={twilogo}
                    />
                    </Link>
                </div>
                <div className={styles.wjp_logo}>
                    <Link href="/">
                    <Image
                    className={styles.jplogo}
                    src={jplogo}
                    />
                    </Link>
                </div>
                <div className={styles.whome}>Home</div>
            
            </div>
            
            </div>
        </div>
    )
}