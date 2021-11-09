import styles from '../form/form.module.css'
import Image from 'next/image'
import jpicon from '../../public/img/jpicon.svg'
import polygon from '../../public/img/polygon.svg'



export default function Form(){
    return(
      
        <main className={styles.main_home_global}>
          <div className={styles.main_container}>

              <div className={styles.linetop}></div>
              <h1 className={styles.main_h1}></h1>
          <form className={styles.form_container} action="">

            <div className={styles.form} >Send me a message!
              
              
              <div className={styles.inputs}>
                <div className={styles.input1_name}><div className={styles.liname}>Name:</div> 
                  <label htmlFor="name"></label>
                  <input className={styles.name_input} type="text" name="name" id="name"/>
                </div>

                <div className={styles.input2_mail}><div className={styles.limail}>E-mail:</div> 
                  <label htmlFor="mail"></label>
                  <input className={styles.mail_input} type="email" name="mail" id="mail"/>
                </div>

              </div>

              <div className={styles.input3_msg}>Message:
                <label htmlFor="msg"></label>
                <textarea 
                className={styles.textarea} 
                name="msg" 
                id="msg" 
                cols="30" 
                rows="5"
                value={this}
                onChange={this} 
                required
                > 
                
                
                
                </textarea>
              </div>

              <div className={styles.button_container}>
                <button className={styles.button} type="submit">send! {' '}
                <div className={styles.button_polygon}>
                  <Image
                  src={polygon}
                  width = {13.89}
                  height = {15}
                  />
                </div>
                </button>
              </div>

            </div>

              <div className={styles.form_footer}>
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
                  <div className={styles.text_p}>
                    j@buriti.ca
                  </div>
                  <div className={styles.text_p2}>
                    My work
                  </div>

                </div>
              
              </div>

          </form>
          
        </div>          
      </main>
    );
}