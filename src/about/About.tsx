import '../App.css'
// import videoreact '../assets/video/videoforreact.mp4'

const About = () => {
    return (
        <div className="about-container">
            <header>
                <h2>Sobre mí</h2>
                <p><b>Desarrollador Web Full Stack Junior</b></p>
            </header>

            <section>
                <article>
                    <video controls autoPlay src="../assets/video/videoforreact.mp4"></video>
                </article>
            </section>
        </div>
    );
}

export default About