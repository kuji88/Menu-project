import React, { useState } from 'react'
import { Fade } from 'react-awesome-reveal'
import { Container, Navbar,Form,Button,Nav,} from 'react-bootstrap'

const Navb = ({searchP}) => {
  const [Deta,setdata]= useState('')

  const searchk= ()=>{
      searchP(Deta)
      
  }

  return (
    
   <Fade>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#" className='fs-3 p-0 m-0'><img alt='restaurant-logo' className='i' src='https://www.pngall.com/wp-content/uploads/8/Restaurant-Logo-PNG-Photo.png'/>Restaurant </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=> setdata(e.target.value) }
              value={Deta}
              
            />
            <Button onClick={searchk} variant="outline-info">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Fade>
  
  )
}

export default Navb