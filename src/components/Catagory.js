import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { Button, Col, Row } from 'react-bootstrap'

const Catagory = ({cfilter,cdata}) => {

  const onfilter=(cat)=>{
    if(cat === "All"){
      cfilter(cat)
    }

    if(cat !== "All"){
      cfilter(cat.cat)
    }
    
  }

  return (
    <Row>
    <Fade>
        <Col className='d-flex justify-content-center mb-5' sm="12">
            <div>
              
            <Button onClick={()=> onfilter("All")} variant='outline-light' className='mx-2'>All</Button>
            {cdata.map((cat,id)=>{
              return(
                <Button key={id} onClick={()=> onfilter({cat})} variant='outline-light' className='mx-2'>{cat}</Button>
              )
            })}
              
               </div>
        </Col>
        </Fade>
    </Row>
  )
}

export default Catagory