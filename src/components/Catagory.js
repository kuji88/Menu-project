import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

const Catagory = () => {
  return (
    <Row>
        <Col className='d-flex justify-content-center mb-5' sm="12">
            <div>
               <Button variant='outline-light' className='mx-2'>Arabic Food</Button>
               <Button variant='outline-light' className='mx-2'>Indian Food</Button>
               <Button variant='outline-light' className='mx-2'>Italian Food</Button>
               </div>
        </Col>
    </Row>
  )
}

export default Catagory