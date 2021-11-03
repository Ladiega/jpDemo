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
                    <Image
                    className={styles.jplogo}
                    src={jplogo}
                    
                    />
                    </Link>
                    </div>
                    <div className={styles.instalogo_container}>
                    <Link href="https://www.instagram.com/buritica/?hl=es">
                    <Image
                    className={styles.instalogo}
                    src={instalogo}
                    
                    />
                    </Link>
                    </div>
                    
                    <div className={styles.twilogo_container}>
                   <Link href="https://twitter.com/buritica?lang=es">
                   <Image
                    className={styles.twilogo}
                    src={twilogo}
                    
                    />                    
                    </Link>
                    </div>
                    
                    <div className={styles.hmenulogo_container} >
                    <button type="button" className={styles.hmenu_button}>
                    <Hmenu/>
                    </button>
                    
                    </div>
                    

            </nav>
            


        </div>
    )
}
