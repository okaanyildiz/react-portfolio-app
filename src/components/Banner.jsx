import profilImg2 from "../assets/img/profil-img2.jpg";

function Banner() {

    return (
        <section className="banner" id="home">
            <div className="banner-left-column">
                <div className="tagline-box">
                    <span className="tagline">Welcome!</span>
                </div>
                <div>
                    <h1>I'm Oguz</h1>
                    <h2>Software Developer</h2>
                    <p>With years of experience, passionate about developing and collaborating. Always eager to learn new technologies.</p>
                    <div className="banner-discover-btn">
                        <a className="button" href="#skills">Discover My Skills</a>
                    </div>
                    <div className="banner-connect-btn">
                        <a className="button" href="#footer">Let's Connect</a>
                    </div>
                </div>
            </div>
            <div className="banner-right-column">
                <img src={profilImg2} alt="oguz yildiz" />
            </div>
        </section>
    )
}

export default Banner