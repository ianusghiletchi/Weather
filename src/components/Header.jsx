import React from "react";

function Header() {
    return (
        <header>
            <div className="nav-bar">
                <h4 style={{ paddingLeft: '2%' }}>Menu Icon</h4>
                <h4 style={{ justifySelf: 'end' }}>Log in</h4>
                <h4 style={{ justifySelf: 'center' }}>Sign In</h4>
            </div>
        </header>
    );
}

export default Header;
