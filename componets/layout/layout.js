import Nav from '../navbar'
import Footer from '../footer'
import styles from '../layout/layout.module.css'

export default function Layout({ children }){
    return (
        <div className={styles.layout_global}>
            <Nav></Nav>
            <main>{children}</main>
            <Footer></Footer>
            
        </div>
    );
}