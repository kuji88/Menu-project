import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Col, Row } from 'react-bootstrap'

const Hdr = () => {
  return (
    <Row>
         <Col sm="12" className='justify-content-center text-center mt-5 pb-2 '>
         <Fade>
        <h1>Food Menu</h1>
        <div className='justify-content-center text-center d-flex my-3'>
        <p className='underline'></p>
        </div>
        </Fade>
        </Col>
    </Row>
  )
}

export default Hdr