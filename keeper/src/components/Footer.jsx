import React from "react";

function Footer(){
    const anoAtual = new Date().getFullYear();
    return <footer><p>
        Copyright @ {anoAtual}
    </p>
    </footer>
}

export default Footer;