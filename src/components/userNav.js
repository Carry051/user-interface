import React from 'react'
import Avatar from 'react-avatar'
import { Col, Nav, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'

import { selectUser } from '../redux/userSlice'

const userProf = () => {
  const user = useSelector(selectUser)
    return (
      <Row>
        <Col>
          <Nav>
            <Nav.Link  href='/userProfile' className='route'>
              <Avatar src='https://cdn-icons-png.flaticon.com/512/147/147142.png' size='50' className='me-2'/>
                {user.firstName}
                {' '}
                {user.lastName}
            </Nav.Link>
          </Nav>
        </Col>
      </Row>
  )
}

export default userProf

