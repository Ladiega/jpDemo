import styles from '../hbutton/hbutton.module.css'
import Image from 'next/image'
import hmenu from '../../public/img/hmenu.svg'
import Open from '../open/open'

import Script from 'next/script'



export default function Hmenu (){
    return(
        <div className="hmenu_container">
            <div className="nav_content">
              <div className="nav">
                
              </div>
            </div>

            <button type="button" className="hamburger">
               <Image
               src={hmenu}
               />
            </button>
            <style jsx>{`
    
  .hmenu_content{
    background:transparent;
  }
  .nav {
    position: fixed;
    background: gray;
    left: -100%;
    width: 375px;
    height: 100vh;
    display: flex;
    flex-direction:column;
    
  }
  
  .nav.open {
    left: 40%;
    transition:1s;
  }
  .nav a{
      border:1px solid salmon;
  }
 
  
  .hamburger {
    
    background:none;
    
    border:none;
    cursor: pointer;
   
  }
  

 `}

            </style>
            <Script jsx>{`
                let nav = document.querySelector(".nav")
                //.hamburger botton
                document.querySelector(".hamburger").addEventListener("click", e => {
                  e.preventDefault()
                
                  if (nav.classList.contains("open")) {
                    nav.classList.remove("open")
                  } else {
                    nav.classList.add("open")
                  }
                })
                `}
            </Script>
             
        </div>
    )
}