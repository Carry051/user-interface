import React from 'react'
import { ListGroup } from 'react-bootstrap';
import '../App.css'

const PostItem = ({ data }) => {
    return (
        <div className='posts' >
            <ListGroup className='list' as="ol" >
                <ListGroup.Item className='lists my-1'>{data} Another Data</ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default PostItem
