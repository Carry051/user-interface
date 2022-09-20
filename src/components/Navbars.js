import '../App.css';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux';

import { selectUser } from '../redux/userSlice';

const Navbars = () => {
    const user = useSelector(selectUser)

    return (
        <div>
          <Navbar bg='dark' variant='dark' expand='lg'>
            <Container>
              <Navbar.Brand href='/home' className='text-info fs-3 home'>Home</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav"/>
              <Navbar.Collapse id="basic-navbar-nav " >
                  <Nav>
                    <Nav.Link href='/home/content' className='route m-1 px-3'>Content</Nav.Link>
                  </Nav>
                  <Nav className='word d-flex justify-content-center w-75 mx-4'>
                    <h3>My Web-Page</h3>
                  </Nav>
              </Navbar.Collapse>

              <Row>
                <Col>
                  <Nav>
                    
                    <Nav.Link href='/home/userProfile' className='route m-2 px-2'>
                      {user.data ? user.data:'User Profile'}
                    </Nav.Link>

                  </Nav>
                </Col>
              </Row>
            </Container>
          </Navbar>
        </div>
  )
}

export default Navbars
