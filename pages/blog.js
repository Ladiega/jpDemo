import styles from '../styles/blog.module.css'

import Nav from '../componets/navbar/index'
import Footer from '../componets/footer/index'



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
        </div>
    )
}