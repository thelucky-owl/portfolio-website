import { Container } from "react-bootstrap"

export const ProjectDetails = ({title, detailDescription,imgUrl}) =>{
    
    return(
            <Container className="project-detail-container" id="project-detail-container">
                <div className="project-detail-text-container">
                <h2>{title}</h2>
                <p>{detailDescription}</p>
                </div>
                <img src={imgUrl} alt="project"/>
                
            </Container>
    )
} 