import Nav from '../navbar'
import Footer from '../footer'
import styles from '../layout/layout.module.css'
import Form from '../form/form'


export default function Layout({ children }){
    return (
        <div className={styles.layout_global}>
            <Nav></Nav>
            <main>{children}</main>
            <Form></Form>      
            <Footer></Footer>
            
        </div>
    );
}