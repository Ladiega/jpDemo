import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../componets/layout/layout'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>JP-demo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

       
       <link rel="icon" href="/jpicon.ico" />
            
      </Head>
           
      <Layout className={styles.Layout}>
         
     </Layout>
   
   
     
    </div>
  )
}
