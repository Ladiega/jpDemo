import styles from '../form/form.module.css'
import Image from 'next/image'
import jpicon from '../../public/img/jpicon.svg'
import polygon from '../../public/img/polygon.svg'

export default function Form(){
    return(
        <main className={styles.main_home_global}>
        <div className={styles.main_container}>
          <h1 className={styles.main_h1}></h1>
          <form className={styles.form_container} action="">
            <ul className={styles.ul} >Send me a message!
              <li className={styles.li_name}>Name:
                <label htmlFor="name"></label>
                <input type="text" name="name" id="name"/>
              </li>
              <li className={styles.li_mail}>E-mail:
                <label htmlFor="mail"></label>
                <input type="email" name="mail" id="mail"/>
              </li>
              <li className={styles.li_msg}>Message:
                <label htmlFor="msg"></label>
                <textarea className={styles.textarea} name="msg" id="msg" cols="30" rows="10"></textarea>
              </li>
              <li className={styles.send_button}>
                <button className={styles.button} type="submit">send! {' '}
                <Image
                  src={polygon}
                  width = {13.89}
                  height = {15}
                />
                
                </button>
              </li>
            </ul>
              <div className={styles.jp_logo}>
                <Image
                  src={jpicon}
                  width = {43}
                  height = {38.89}
                />
              </div>
              <div className={styles.line}>
                
              </div>
              <div className={styles.text}>
                <p>
                  j@buriti.ca
                </p>

              </div>

          </form>
          
        </div>          
      </main>
    );
}