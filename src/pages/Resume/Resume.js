import { message } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Resume() {
    const handleClick = () => {
        message.warning('Resume will be available soon.')
    }

    return (
        <div className='container mx-auto w-75'>
            <h2 className='my-5 fw-bolder'>Resume</h2>
            <p>Click here to <Link onClick={handleClick} className='fw-bold' style={{ color: '#545454' }}>View</Link>
                &nbsp;or&nbsp;
                <Link onClick={handleClick} className='fw-bold' style={{ color: '#545454' }}>Download</Link> my Resume.
            </p>
        </div>
    )
}
