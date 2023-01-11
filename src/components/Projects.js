import { Container, Col, Row,Nav, Tab, Collapse } from "react-bootstrap"
import {ProjectCard}from './projectCard';
import {ProjectDetails}from './projectDetails';
import { projectsInfo } from "../assets/projectsInfo";
import { useState } from "react";

export const Projects = ()=>{
    const[showDetail, setShowDetail] = useState([
        {   id:0,
            visible:false
        },
        {   id:1,
            visible:false
        },
        {   id:2,
            visible:false
        },
        {   id:3,
            visible:false
        },
    ]);
    function clickHandler(index){
            const itemsToSelect = showDetail.map((item, i) => {
            if(index !== i) item.visible  = false
            if (index === i) item.visible = !item.visible;
            return item;
            }, []);
            setShowDetail(itemsToSelect);
        }
    return(
        <section className="projects" id="werk">
            <Container>
                <Row>
                    <Col>
                        <h2>Werk</h2>
                        <p>
                            some stuff
                        </p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="1">
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
                                                <Collapse in={showDetail[index].visible} >
                                                <div 
                                                id={index.toString()}
                                                className={ showDetail[index].visible ? 'proj-detail.open' : 'proj-detail'}
                                                aria-controls={index}
                                                aria-expanded={showDetail[index].visible}
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
                                                </Col>
                                                )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="2">
                                <Row>
                                    loren ipsum
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="3">
                                <Row>
                                    loren ipsum
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
