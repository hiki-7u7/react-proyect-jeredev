import videoreact from '../assets/video/videoforreact.mp4'

export const About = () => {
    return (
        <div className="about-container">
            <header>
                <h2>Sobre mí</h2>
                <p><b>Desarrollador Web Full Stack Junior</b></p>
            </header>

            <section>
                <article>
                    <video controls autoPlay src={videoreact}></video>
                </article>
            </section>
        </div>
    );
}
