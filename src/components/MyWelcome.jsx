import { Col, Container, Dropdown, Row } from "react-bootstrap"
import { CardChecklist, Grid1x2Fill } from "react-bootstrap-icons"


const Welcome = () =>{
        return(
            <Container fluid className="bg-dark">
          <Row className="d-flex flex-nowrap">
            <Col className=" d-flex align-items-center justify-content-start" >
              <h1 className="text-white me-lg-5 me-2 fs-5 d-flex">TV Shows</h1>
              <Dropdown>
               <Dropdown.Toggle variant="black" id="dropdown-basic" className="text-white border-1 border-white"> Geners</Dropdown.Toggle>

      <Dropdown.Menu style={{minWidth: '8.1 rem'}} className="bg-dark">
        <Dropdown.Item href="#profile" className="text-white">Action</Dropdown.Item>
        <Dropdown.Item href="#settings" className="text-white">nime</Dropdown.Item>
        <Dropdown.Item href="#settings" className="text-white">Horror</Dropdown.Item>
       
      </Dropdown.Menu>
    </Dropdown>
            </Col>
            <div className="col d-flex align-items-center justify-content-end me-5">
              <div
                className="border border-1 border-white d-flex align-items-center justify-content-center p-2"
                 style= {{width: '30px', height: '22px'}}
              >
                <CardChecklist className="text-white"/>
              </div>
              <div
                className="border border-1 border-white d-flex align-items-center justify-content-center p-2"
                style= {{width: '30px', height: '22px'}}
              >
                <Grid1x2Fill className="text-white"/>
              </div>
            </div>
          </Row>
        </Container>
        )
    }
    export default Welcome