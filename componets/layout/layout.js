import Background from '../background/background'
import styles from '../layout/layout.module.css'

export default function Layout({ children }){
    return (
        <div className={styles.layout_global}>
            
            <Background>
                <main>{children}</main>         
            </Background>
        </div>
    );
}