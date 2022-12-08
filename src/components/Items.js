import React from 'react'
import { Col, Row,Card } from 'react-bootstrap'

const Items = () => {
  return (
    <Row className='py-2'>
        <Col  sm="12">
        <Card className='d-flex flex-row text-black' style={{backgroundColor:'#F0F0F0'}}>
            <Card.Img className='catagoryImg' variant="top" src="arabic-food.jpg" />
            <Card.Body className='itemB'>
              <Card.Title className='m-2 '>
              <div className='d-flex justify-content-between'>
              <h1 className='itemTitle fs-4'>Arabic Salad</h1>
              <h1 className='fs-4 py-0 color2'>8$</h1>
              </div>
              </Card.Title>
              <Card.Text className='mt-3 mr-3 mb-3 itemDiscribe'>
              Fattoush is a Levantine salad made from toasted or fried pieces of khubz combined with mixed greens and other vegetables, such as radishes and tomatoes. Fattoush is popular among all communities in the Levant. 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
  )
}

export default Items