import "./Footer.css"
import Footer_top from "./Footer_top/Footer_top"
import Footer_lower from "./Footer_lower/Footer_lower"
import faviconSrc from "./favicon.png"

function Footer() {
    return (
        <>
            <div className="footer_container">
                <div>
                    <Footer_top />
                    <Footer_lower />
                </div>
                <div>
                    <img src = {faviconSrc} />
                    <p>Название школы</p>
                </div>
            </div>
        </>

    )
}

export default Footer;