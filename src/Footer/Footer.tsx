import "./Footer.css"
import Footer_top from "./footerTop/Footer_top"
import Footer_lower from "./footerLower/Footer_lower"
import faviconSrc from "./pic/favicon.png"
import React from "react"

function Footer() {
    return (
        <>
            <div className="footer_container">
                <div className="top_lower_footer">
                    <Footer_top />
                    <Footer_lower />
                </div>
                <div className="logo_footer">
                    <img src={faviconSrc} />
                    <p>Название школы</p>
                </div>
            </div>
        </>

    )
}

export default Footer;