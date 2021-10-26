
import Link from 'next/link'
import styles from '../writing/writing.module.css'
import Image from 'next/image'
import empanada from '../../public/img/empanada.png'
import triangleb from '../../public/img/wpolygon.svg'
import polygon from '../../public/img/triangleb.svg'

export default function Writing(){
    return(
       
        <main className={styles.main_container3}>
          <div className={styles.writing_container}>
            <div className={styles.writing_h1}>Writing</div>
            <div className={styles.writing_line}></div>
            <div className={styles.writing_p1}>I build effective distributed eng teams and latino/latam dev communities
            </div>
            <div className={styles.writing_p2}>Announcing</div>
            <div className={styles.writing_p3}>The Empanada Fund</div> 
            
            
            <div className={styles.empanada_container}>
            <Image  
                 className={styles.empanada_img}
                 alt="empanada"
                 src={empanada}           
                 width={1269}
                 height={633.45}
            />
            
            </div>                               
             <div className={styles.writing_p4}>TL;DR I’m announcing the creation of a new fund to sponsor community software conferences in Latin-America and provide scholarships for 🇺🇸/🇨🇦 based Latinx folks. So far we’ve raised almost $40k for our 2020 fund, 💵 tax-deductible donations received here (with employer match support).
             </div>
             
             <div className={styles.writing_p5}>
               <Link href="/"  >
              Read more... 
             </Link>
             </div>
            
          </div>
            <div className={styles.wcircle}></div>


          <div className={styles.button_container}>
            <button className={styles.button} type="button">

              <div className={styles.button_p}> More article {' '}</div>

              <div className={styles.polygon_container}>

                <div className={styles.wpolygon_container}>
                <Image
                className={styles.wpolygon}
                src={triangleb}
                width={15}
                height={15}
                />
                </div>

                <div className={styles.bpolygon_container}>
                <Image
                className={styles.polygon}
                src={polygon}
                width={15}
                height={15}
                />
                </div>


            </div>
            </button>
          </div>

        </main>
    )
}