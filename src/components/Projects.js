import { Container, Col, Row,Nav, Tab, Collapse, Button} from "react-bootstrap"
import {ProjectCard}from './projectCard';
import {ProjectDetails}from './projectDetails';
import { projectsInfo } from "../assets/projectsInfo";
import { CourseWork} from "../assets/CourseWork";
import { PersonalWork} from "../assets/PersonalWork";
import { useRef, useState } from "react";

export const Projects = ()=>{
    const[showDetail, setShowDetail] = useState([
       false,
       false,
       false,
       false,
       false
    ]);
    const clickRef = useRef(null)
    function clickHandler(index){
        const itemsToSelect = showDetail.map((item, i) => {
            if(index !== i) item  = false
            if (index === i) item = !item;
            return item;
            }, []);
            setShowDetail(itemsToSelect);
            clickRef.current?.scrollIntoView({behavior: 'smooth'});
        }
    return(
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2 ref={clickRef}>My work</h2>
                        <p>
                            Some project that i've worked on, either in my study or for myself.
                        </p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="1" >
                        <Nav variant="pills">
                            <Nav.Item>
                                <Nav.Link eventKey="1">Team projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="2">Course work</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="3">Personal work</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="1">
                                <Row>
                                {
                                    
                                        projectsInfo.map((project,index)=>{
                                            return(
                                                <Collapse in={showDetail[index]} >
                                                <div 
                                                key={index}
                                                id={index.toString()}
                                                className={ showDetail[index] ? 'proj-detail.open' : 'proj-detail'}
                                                aria-controls={index}
                                                aria-expanded={showDetail[index]}
                                                >
                                                <ProjectDetails key={index} {...project}/>
                                                </div>
                                                </Collapse>
                                            )
                                        })
                                    }
                                </Row>
                                <Row  >
                                    {
                                       
                                        projectsInfo.map((project,index)=>{
                                            return(
                                                //maybe use case in onclick
                                                //onclick={()=>{ if index =0/1/2/3/ then change showdetail 0/1/2/3 coresponding to eachother}}
                                                // ()=>setShowDetail(!showDetail)
                                               <Col id={index} sm={6} md={4} onClick={ ()=> clickHandler(index)} >
                                                <ProjectCard  key={index} {...project} />
                                                <Button className="read-button" onClick={ ()=> clickHandler(index)} size="lg">Read more</Button>
                                                </Col>
                                                )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="2">
                            <Row>
                                {
                                    
                                        CourseWork.map((project,index)=>{
                                            return(
                                                <Collapse in={showDetail[index]} >
                                                <div 
                                                key={index}
                                                id={index.toString()}
                                                className={ showDetail[index] ? 'proj-detail.open' : 'proj-detail'}
                                                aria-controls={index}
                                                aria-expanded={showDetail[index]}
                                                >
                                                <ProjectDetails key={index} {...project}/>
                                                </div>
                                                </Collapse>
                                            )
                                        })
                                    }
                                </Row>
                                <Row  >
                                    {
                                       
                                        CourseWork.map((project,index)=>{
                                            return(
                                                //maybe use case in onclick
                                                //onclick={()=>{ if index =0/1/2/3/ then change showdetail 0/1/2/3 coresponding to eachother}}
                                                // ()=>setShowDetail(!showDetail)
                                               <Col id={index} sm={6} md={4} onClick={ ()=> clickHandler(index)} >
                                                <ProjectCard  key={index} {...project} />
                                                <Button className="read-button" onClick={ ()=> clickHandler(index)} size="lg">Read more</Button>
                                                </Col>
                                                )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="3">
                            <Row>
                                {
                                    
                                        PersonalWork.map((project,index)=>{
                                            return(
                                                <Collapse in={showDetail[index]} >
                                                <div 
                                                key={index}
                                                id={index.toString()}
                                                className={ showDetail[index] ? 'proj-detail.open' : 'proj-detail'}
                                                aria-controls={index}
                                                aria-expanded={showDetail[index]}
                                                >
                                                <ProjectDetails key={index} {...project}/>
                                                </div>
                                                </Collapse>
                                            )
                                        })
                                    }
                                </Row>
                                <Row  >
                                    {
                                       
                                        PersonalWork.map((project,index)=>{
                                            return(
                                                //maybe use case in onclick
                                                //onclick={()=>{ if index =0/1/2/3/ then change showdetail 0/1/2/3 coresponding to eachother}}
                                                // ()=>setShowDetail(!showDetail)
                                               <Col id={index} sm={6} md={4} onClick={ ()=> clickHandler(index)} >
                                                <ProjectCard  key={index} {...project} />
                                                <Button className="read-button" onClick={ ()=> clickHandler(index)} size="lg">Read more</Button>
                                                </Col>
                                                )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>

        </section>
        
    )
}
