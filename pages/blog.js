import styles from '../styles/blog.module.css'

import Nav from '../componets/navbar/index'
import Footer from '../componets/footer/index'
import Bio2 from '../componets/bio2/index'



export default function Blog(){
    return(
       <div>
            <div className={styles.blog_container}>
                <Nav
                className={styles.nav_container}            
                />
                <Footer
                className={styles.footer_container}
                />
            </div>
            <div className={styles.bio_container}>
                <Bio2></Bio2>

            </div>

        </div>
    )
}