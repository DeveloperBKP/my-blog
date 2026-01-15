import bittu from "../assets/bittu.jpg";

function About() {
    return (
        <div className="about-container">
            <div className="about-image">
                <img src={bittu} alt="Bittu Raj" />
            </div>
        <div className="about-text">
            <h2>About Me</h2>
            <p>Hello! I'm Bittu Raj, a passionate blogger sharing my thoughts and experiences.</p>
        </div>
    </div>
    );
}
export default About;