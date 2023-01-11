
export const ProjectCard = ({id,title, description, imgUrl})=>{

    return(
        
            <div className="img-box">
                <img src={imgUrl} alt="project" />
                <div className="proj-text">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        
    )
}