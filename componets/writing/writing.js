
import Link from 'next/link'
import styles from '../writing/writing.module.css'
import Image from 'next/image'
import empanada from '../../public/img/empanada.png'
import triangleb from '../../public/img/triangleb.svg'

export default function Writing(){
    return(
       
        <main className={styles.main_container3}>
          <div className={styles.writing_container}>
            <h1>Writing</h1>
            <p>I build effective distributed eng teams and latino/latam dev communities</p>
            <p>Announcing <br/><b>The Empanada Fund</b></p>
            <div className={styles.empanada_container}>
            <Image  
                 className={styles.empanada_img}
                 alt="empanada"
                 src={empanada}           
                 width={634.5}
                 height={316.725}
            />
            </div>                               
             <p className={styles.wcontainer_p}>TL;DR I’m announcing the creation of a new fund to sponsor community software conferences in Latin-America and provide scholarships for 🇺🇸/🇨🇦 based Latinx folks. So far we’ve raised almost $40k for our 2020 fund, 💵 tax-deductible donations received here (with employer match support).
             <br/><b>
               <Link href="/" >
              Read more... 
             </Link></b>
            </p>
          </div>
          <div className={styles.button_container}>
            <button className={styles.button} type="button">More article {' '}
              <Image
               className={styles.triangle_img}
               src={triangleb}
               width={19}
               height={19}
              />
             
            </button>
          </div>

        </main>
    )
}