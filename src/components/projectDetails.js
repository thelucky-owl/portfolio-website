import { Container } from "react-bootstrap"
import { ImgCarousel } from "./imgCarousel"

export const ProjectDetails = ({title, detailDescription,carouselImgUrls}) =>{
    
    return(
            <Container className="project-detail-container" id="project-detail-container">
                <div className="project-detail-text-container">
                <h2 >{title}</h2>
                <p className="project-p" >{detailDescription}</p>
                </div>
                <ImgCarousel imgSource={carouselImgUrls}/>
                {/* <img src={imgUrl} alt="project"/> */}
                
                
            </Container>
    )
} 