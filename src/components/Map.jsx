import { ReactComponent as Instagram } from "../images/Instagram.svg";
import { ReactComponent as Phone } from "../images/phone.svg";
import { ReactComponent as Chat } from "../images/whiteChat.svg";

const mapSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6043.981419549929!2d30.544255067311536!3d50.43772629463245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cfa8b56ad867%3A0x84a9b5b4aafcb76e!2z0LLRg9C70LjRhtGPINCc0L7RgdC60L7QstGB0YzQutCwLCA1LCDQmtC40ZfQsiwgMDIwMDA!5e0!3m2!1suk!2sua!4v1663318763311!5m2!1suk!2sua';


export default function Map(){


    return(
        <>
            <div className="map">
                <iframe src={mapSrc} title="map"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
            </div>
            <div className="socials">
                <a href="tel:#"><Instagram/></a>
                <a href="tel:#"><Chat/></a>
                <a href="tel:#"><Phone/></a>
                
            </div>
        </>
    )
}