import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <>
        <div className="header">
            {/*navbar*/}
            <nav className="XzUbg mtTH6">
                <div className="EcToA">
                    <div className="SVozw">
                        <div className="vxDaw"></div>
                        <a
                            className="boxoffice"
                            href="/home"
                            style={{
                                textDecoration: "none",
                                fontSize: 25,
                                fontWeight: 900,
                                color: "red",
                                letterSpacing: 2,
                                marginleft: -10
                            }}
                        >
                            BoXXoFFice
                        </a>
                    </div>
                    {/*find movies searchbar*/}
                    <div className="SVozw Z21oI">
                        <Link to="/login"
                            className="sign"
                        >
                            Log In
                        </Link>
                        <Link to="register" className="register">
                            Register
                        </Link>
                    </div>
                </div>
            </nav>
            <div className="tittle">
                <span className="welcome">Welcome to Boxxoffice!</span>
                <Link to="Home" className="white-mode">
                    Welcome to the Boxxoffice!
                </Link>
            </div>
        </div>
        </>
    )
}
export default Header;
