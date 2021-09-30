import styles from '../footer/footer.module.css'
import Link from 'next/link'
import Image from 'next/image'
import jplogob from '../../public/img/jplogob.png'
import instalogob from '../../public/img/instaiconb.svg'
import twlogob from '../../public/img/twlogob.png'

export default function Footer (){
    return(
        <div className = {styles.footer_global}>
            
            <footer className={styles.footer_container}>
                    <div className={styles.instalogob}>
                        <Image
                            className={styles.instaimg}
                            src={instalogob}
                            width={35}
                            height={30}

                        />

                    </div>
                    <div className={styles.twlogob}>
                    <Image
                            className={styles.twimg}
                            src={twlogob}
                            width={40}
                            height={40}

                        />


                    </div>
                    <div className={styles.jplogob}>
                    <Image
                            className={styles.jpimg}
                            src={jplogob}
                            width={54}
                            height={48}

                        />


                    </div>
                    <div className={styles.home}>
                        <Link href="/">
                          <a >Home</a>
                        </Link>
                        
                    </div>
            </footer>

        </div>
    );
}