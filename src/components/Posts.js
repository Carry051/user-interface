import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'
import '../App.css'

import { getData, selectData } from '../redux/postSlice'
import PostItem from './PostItem'

const Posts = () => {
    const dispatch = useDispatch()
    const data = useSelector(selectData)

    return(
        <div>
            <Button onClick={() => dispatch(getData())} className='dataButton'>Click and get Data</Button>
            <PostItem key={data} data={data}/>
        </div>
    )
}

export default Posts