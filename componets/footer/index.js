import styles from '../footer/footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

import jplogo from '../../public/img/jplogob.png'
import instalogo from '../../public/img/instaiconb.svg'
import twilogo from '../../public/img/twlogob.png'


export default function Footer(){
    return(
        <div className={styles.global_container}>
            <nav className={styles.footer_container}>
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
                    objectFit="cover"
                    />
                    </a>
                    </Link>
                    </div>
                    <div className={styles.home_container}>
                        <Link href="/">
                            <a >Home</a>
                        </Link>
                    
                    </div>
                    

            </nav>
        </div>
    )
}