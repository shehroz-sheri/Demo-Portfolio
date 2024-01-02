import React from 'react'

export default function Contact() {
    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <div id='outer_div' className='mx-auto'>
            <h2 className='text-dark' style={{ fontSize: '3em', fontWeight: 'bolder' }}>Contact</h2>
            <p>Get in touch or shoot me an email directly on <strong>shehrozsheri36347@gmail.com</strong></p>
            <form onSubmit={handleSubmit} className='my-5'>
                <div className="mb-3">
                    <label htmlFor="exampleInputName1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputName1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Message</label>
                    <textarea className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
