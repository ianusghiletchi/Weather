import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{ position: 'relative', marginTop: 'auto' }}>
            <p>&copy; {currentYear} Ghiletchi. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
