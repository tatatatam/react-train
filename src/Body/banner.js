import React from 'react'
import './body.css'

const Banner = (props) => {
    const { imgUrl } = props
    return (
        <div>
            <img src={imgUrl} />
        </div>
    )
}

export default Banner;