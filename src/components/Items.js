import React from 'react'
import { Col, Row,Card } from 'react-bootstrap'
import { Fade } from 'react-awesome-reveal'

const Items = ({itemfilter}) => {
  return (
    <Row className='py-2'>
      
      {
        itemfilter.length >=1 ? (

      itemfilter.map((item,key) =>{
          
          return(
            
          <Col  sm="12" className='my-2' key={key}>
            <Fade direction={'left'}>
        <Card className='d-flex flex-row text-black' style={{backgroundColor:'#F0F0F0'}}>
            <Card.Img className='catagoryImg' variant="top" src={item.img} />
            <Card.Body className='itemB'>
              <Card.Title className='m-2 '>
              <div className='d-flex justify-content-between'>
              <h1 className='itemTitle fs-4'>{item.title}</h1>
              <h1 className='fs-4 py-0 color2'>{item.price}</h1>
              </div>
              </Card.Title>
              <Card.Text className='mt-3 mr-3 mb-3 itemDiscribe'>
                {item.discribe}
              </Card.Text>
            </Card.Body>
          </Card>
          </Fade>
        </Col>)
        
        })
      ): <h1 className='text-center text-light'>The list is empty </h1>
      }
      
        
    </Row>
  )
}


export default Items