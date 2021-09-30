import styles from '../navbar/navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import jplogo from '../../public/img/jpicon.svg'
import instalogo from '../../public/img/instaicon.svg'
import twilogo from '../../public/img/twicon.svg'
import hmenulogo from '../../public/img/hmenu.svg'

export default function Nav(){
    return(
        <div className={styles.nav_global}>
            <nav className={styles.nav_container}>
                <div className = {styles.nav_items}>
                    <div className = {styles.jplogo}>
                        <Link href="/">
                            <a>
                                <Image                                
                                    src = {jplogo}
                                    alt = "logo JP"
                                    width = {35}
                                    height = {29}          
                                />
                            </a>
                        </Link>
                    </div>

                    <div className = {styles.instalogo}>
                        <Link href="/">
                            <a>
                                <Image
                                   
                                    src = {instalogo}
                                    alt = "instalogo"
                                    width = {26}
                                    height = {25}          
                                />
                            </a>
                        </Link>
                    </div>

                    <div className = {styles.twilogo}>
                        <Link href="/">
                            <a>
                                <Image
                                   
                                    src = {twilogo}
                                    alt = "instalogo"
                                    width = {26}
                                    height = {25}          
                                />
                            </a>
                        </Link>
                    </div>

                    <div  className = {styles.hmenulogo}>
                        <Link href="/">
                            <a>
                                <Image
                                
                                    src = {hmenulogo}
                                    alt = "instalogo"
                                    width = {32.2}
                                    height = {23.8}          
                                />
                            </a>
                        </Link>
                    </div>
                
            
                </div>   
            </nav>

        </div>
    )
}
