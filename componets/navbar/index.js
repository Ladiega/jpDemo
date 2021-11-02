import styles from '../navbar/navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Hmenu from '../hbutton/hbutton'


import jplogo from '../../public/img/jpicon.svg'
import instalogo from '../../public/img/instaicon.svg'
import twilogo from '../../public/img/twicon.svg'
import hmenulogo from '../../public/img/hmenu.svg'

export default function Nav(){
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
                    <Hmenu/>
                    </div>
                    

            </nav>
            


        </div>
    )
}