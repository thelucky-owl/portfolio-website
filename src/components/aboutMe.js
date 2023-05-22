import { Container } from "react-bootstrap"
import imgSource from '../assets/images/museumMeNOot.jpg'
export const AboutMe = ()=>{
return(
    <section className="about-me" id="about-me">
        <Container>
            <h2 id="about-me-title">About me</h2>
            <div className="about-me-content">
                <p>Hello! I'm Fela, a third year student CMGT at Rotterdam university of applied sciences. In my study i've done UI and UX design, programming wise i've done front end, back-end and mobile development, mainly javascript and php. In my free time I love to go on walks with my dog, as well as draw, paint, play D&D with my friends and play video games.</p>
                <img id="about-me-img" src={imgSource} alt="img of fela and a sibling"></img>
                <p id="about-me-img-caption">A photo of me, on the right, and one of my siblings, on the left, at natural history museum naturalis.</p>
            </div>
        </Container>
    </section>
)
}