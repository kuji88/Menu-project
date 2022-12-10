import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

const Catagory = ({cfilter}) => {
  
  const onfilter=(cat)=>{
    cfilter(cat)
  }

  return (
    <Row>
        <Col className='d-flex justify-content-center mb-5' sm="12">
            <div>
               <Button onClick={()=> onfilter("Arabic")} variant='outline-light' className='mx-2'>Arabic Food</Button>
               <Button onClick={()=> onfilter("Indian")} variant='outline-light' className='mx-2'>Indian Food</Button>
               <Button onClick={()=> onfilter("All")} variant='outline-light' className='mx-2'>All</Button>
               </div>
        </Col>
    </Row>
  )
}

export default Catagory