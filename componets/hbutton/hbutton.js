import styles from '../hbutton/hbutton.module.css'
import Image from 'next/image'
import hmenu from '../../public/img/hmenu.svg'
import Script from 'next/script'



export default function Hmenu (){
    return(
        <div>
            <div className="nav">
                <a>menu expanded</a>
                <a>menu expanded</a>
                <a>menu expanded</a>

            </div>
            <button type="button" className="hamburger">
               <Image
               src={hmenu}
               />
            </button>
            <style jsx>{`
    
  
  .nav {
    position: fixed;
    background: gray;
    left: -100%;
    width: 375px;
    height: 100vh;
    display: flex;
    flex-direction:column;
    color: #fff;
  }
  
  .nav.open {
    left: 0;
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