import React from 'react'
import { Card , ListGroup} from 'react-bootstrap'

const UserCard = ({user}) => {
  return (
    <div>
 <Card style={{ width: '18rem' , margin:'15px' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjRBSuYkVn5tNFluUWT5Td7LOkKsXYxHG9OA&usqp=CAU" />
      <Card.Body>
        <Card.Title> {user.name + "" + user.username} </Card.Title>
        <Card.Text>
        <ListGroup variant="flush">
        <ListGroup.Item>email :{user.email}</ListGroup.Item>
        <ListGroup.Item>phone :{user.phone}</ListGroup.Item>
        <ListGroup.Item>Street : {user.address.street}</ListGroup.Item>
        <ListGroup.Item>City :{user.address.city}</ListGroup.Item>
        <ListGroup.Item>Street :{user.address.street}</ListGroup.Item>
        <ListGroup.Item>Geo :{user.address.geo.lng}</ListGroup.Item>
        <ListGroup.Item>company :{user.company.name}</ListGroup.Item>
      </ListGroup>
        </Card.Text>
       
      </Card.Body>
    </Card>
    </div>
  )
}

export default UserCard
