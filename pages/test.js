import Hmenu from '../componets/hbutton/hbutton'
import Open from '../componets/open/open'
import Script from 'next/script'
export default function Test (){
    return(
        <div>
            <div className="button_container">
                <button className="button">
                    ham
                </button>
            </div>
        <Script id="menu" strategy="lazyOnload">
            {`
                document.getElement
            `}
        </Script>
            
        </div>
        
    )
}