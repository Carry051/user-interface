import React, { useState } from 'react' 
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux';

import { setUserName } from '../redux/userSlice'

const UserProfile = () => {
  const [changeFirstName , setChangeFirstName] = useState('')
  const [changeLastName , setChangeLastName] = useState('')
  const dispatch = useDispatch();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(localStorage.getItem(setChangeFirstName))
    console.log(setChangeLastName)

    dispatch(
      setUserName({
        data:[changeFirstName,' ',changeLastName]}))
  }

  return (
    <Form className='userProfile' 
      onSubmit={(e) => handleSubmit(e)}>
        
        <Form.Group className='m-3' >
          <Form.Label className='d-flex justify-content-center text-primary'>First Name</Form.Label>
          <Form.Control type='text' 
            placeholder='Enter your name' 
            className='mb-3 text-center'
            value={changeFirstName} 
            onChange={e => setChangeFirstName(e.target.value)}
            />
        
          <Form.Label className='d-flex justify-content-center text-primary'>Last Name</Form.Label>
          <Form.Control type='text' 
            placeholder='Enter your last name'  
            className='text-center'
            value={changeLastName} onChange={e => setChangeLastName(e.target.value)}
            />
        </Form.Group>
        <Button type='submit' className='mt-1'>Save</Button>
    </Form>
  )
}

export default UserProfile