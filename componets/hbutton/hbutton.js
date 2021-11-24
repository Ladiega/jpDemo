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
              <Open/>
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
    background:white;
    margin-top:-14.5%;
    right: 100%;

    width: 375px;
    
    display: flex;
    flex-direction:column;
    
  }
  
  .nav.open {
    right: 0%;
    transition:.3s;
  }
  .nav a{
      border:.3px solid salmon;
  }
 
  
  .hamburger {
    
    background:none;
    
    border:none;
    cursor: pointer;
   
  }
  

 `}

            </style>
            <Script id="ham_button" strategy="lazyOnload">
              {`
                let nav = document.querySelector(".nav")
                
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