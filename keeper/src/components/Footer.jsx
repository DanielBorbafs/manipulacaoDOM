import React from "react";

function Footer(){
    const anoAtual = new Date().getFullYear();
    return <footer><p>
        @DanielBorba Copyright @ {anoAtual}
    </p>
    </footer>
}

export default Footer;