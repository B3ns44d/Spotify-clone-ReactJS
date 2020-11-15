import React from "react"
import './Login.css';
import { loginUrl } from './spotify';
function Login() {
    return (

    <div className="login">
    <div className="wrap">
    <header>
        {/*Nav bar*/}
        <div className="container">
        {/*logo*/}
        <div className="logo">
            <a href="https://www.spotify.com/ma-fr">
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="spotify" />
            </a>
        </div>
        {/*Navigation bar*/}
        <nav>
            <div className="overlay" />
            {/*Burger Menu*/}
            <div id="menuToggle">
            <input type="checkbox" id="touchMe" />
            <span className="burgerBars" />
            <span className="burgerBars" />
            <span className="burgerBars" />
            <ul id="menu">
                <li><a href="https://www.spotify.com/ma-fr/premium/?checkout=false">Premium</a></li>
                <li><a href="https://support.spotify.com/ma-fr/">Support</a></li>
                <li><a href="https://www.spotify.com/ma-fr/download/windows/?_ga=2.208559255.425432251.1598228517-1646491312.1569707483">Download</a></li>
                <li>
                <div className="barra">|</div>
                </li>
                <li><span id="horizontal"/></li>
                <li><a href="https://www.spotify.com/ma-fr/signup/">Sign up</a></li>
                <li><a href={loginUrl}>Log in</a></li>
                <li className="logo2">
                <a href="https://www.spotify.com/ma-fr">
                    <img src="logo.png" alt="spotify" />
                </a>
                </li>
            </ul>
            </div>
        </nav>
        </div>
    </header>
    <main>
        {/*landing text*/}
        <section className="container3">
        <article>
            <h1>
            Music for everyone.
            </h1>
            <h4>
            Millions of songs. No credit card required.
            </h4>
            <span id="boton">
            <a id="botonDownload" href={loginUrl}>
            Login to spotify it's free
            </a>    
            </span>
        </article>
        </section>
    </main>
    <footer>
        <div className="container3">
        <div className="pieWeb">
            {/*logo*/}
            <div className="logoFooter">
            <a href="https://www.spotify.com/ma-fr">
                <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="spotify" />
            </a>
            </div>
            {/*End logo*/}
            <div className="enlaces">
            <dl>
                <dt>COMPANY</dt>
                <dd><a href="https://www.spotify.com/ma-fr/about-us/contact/">About</a></dd>
                <dd><a href="https://www.spotifyjobs.com/">Jobs</a></dd>
                <dd><a href="https://newsroom.spotify.com/">For the Record</a></dd>
            </dl>
            <dl>
                <dt>COMMUNITIES</dt>
                <dd><a href="https://artists.spotify.com/">for Artists</a></dd>
                <dd><a href="https://developer.spotify.com/">Developers</a></dd>
                <dd><a href="https://www.spotifyforbrands.com/en-US/">Advertising</a></dd>
                <dd><a href="https://investors.spotify.com/home/default.aspx">Investors</a></dd>
                <dd><a href="https://spotifyforvendors.com/">Vendors</a></dd>
            </dl>
            <dl>
                <dt>USEFUL LINKS</dt>
                <dd><a href="https://support.spotify.com/ma-fr/">Support</a></dd>
                <dd><a href="https://open.spotify.com/">Web Player</a></dd>
                <dd><a href="https://www.spotify.com/ma-fr/free/">Free Mobile App</a></dd>
            </dl>
            </div>
            {/*End links*/}
            <div className="socialMedia">
            <ul>
                <li><a href="https://www.instagram.com/spotify/" className="fab fa-instagram"></a></li> 
                <li><a href="https://twitter.com/spotify" className="fab fa-twitter"></a></li>
                <li><a href="https://www.facebook.com/SpotifyEspana/?brand_redir=6243987495" className="fab fa-facebook-f"></a></li>
            </ul>
            </div>
            {/*End social media*/}
        </div>
        
        <div className="sameLine">
            <div className="legal">
            <ul>
                <li><a href="https://www.spotify.com/ma-fr/legal/">Legal</a></li>
                <li><a href="https://www.spotify.com/ma-fr/privacy/">Privacy Center</a></li>
                <li><a href="https://www.spotify.com/ma-fr/legal/privacy-policy/">Privacy Policy</a></li>
                <li><a href="https://www.spotify.com/ma-fr/legal/cookies-policy/">Cookies</a></li>
                <li><a href="https://www.spotify.com/ma-fr/legal/privacy-policy/#s3">About Ads</a></li>
            </ul>
            </div>
            {/*Legal purpose*/}
            <div className="container4">
            <small>
                ©  by <a href="https://www.linkedin.com/in/b3ns44d/"> Abdessamad Bensaad</a>
            </small>
            </div>
            {/*End container4*/}
        </div>
        {/*End sameLine*/}
        </div>
        {/*End container3*/}
    </footer>
    </div>

    </div>
    )
}

export default Login;