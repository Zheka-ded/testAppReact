import './ImageList.css'

import React, { useEffect, useState } from 'react';
import Services from '../../services/Services';
import Modal from '../modal/Modal';
import Spinner from '../spinner/Spinner';

export default function ImageList () {

    const [img, setImg] = useState(null);
    const [imgId, setImgId] = useState(0);
    const [imgClick, setImgClick] = useState(false);

    useEffect(() => {
        Services.getAllImages().then(img => setImg(img));
    }, [])

    function handleClick (imgId, imgClick) {
        setImgId(imgId)
        setImgClick(imgClick)
    }

    function closeModal (close) {
        setImgClick(close)
    }

    return(
        <div className="ImageList">

            { imgClick ? <Modal id={imgId} closeModal={closeModal} /> : null}

            { img !== null ? (img.map((img) => <img key={img.image_id} 
                                                    src={img.src} 
                                                    alt={img.src}
                                                    onClick={ () => handleClick(img.image_id, true) } /> )) : <Spinner/> }
        </div>
    )
}