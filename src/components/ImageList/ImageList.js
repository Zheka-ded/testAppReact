import './ImageList.css'

import React, { useEffect, useState } from 'react';
import Services from '../../services/Services';
import Modal from '../modal/Modal';
import Spinner from '../spinner/Spinner';

export default function ImageList () {
    /**
     * Массив изображений полученных с сервера
     */
    const [img, setImg] = useState(null);
    /**
     * Id изображения
     */
    const [imgId, setImgId] = useState(0);
    /**
     * Клик по изображению
     */
    const [imgClick, setImgClick] = useState(false);
    /**
     * Следим за Массивом изображений
     */
    useEffect(() => {
        Services.getAllImages().then(img => setImg(img));
    }, [])
    /**
     *  Следим за изображением и передаем клик по выбранному
     */
    function handleClick (imgId, imgClick) {
        setImgId(imgId)
        setImgClick(imgClick)
    }
    /**
     * Закрытие модального окна
     */
    function closeModal (close) {
        setImgClick(close)
    }

    return(
        <div className="ImageList">
            
            { imgClick ? <Modal id={imgId} closeModal={closeModal} /> : null}

            { img !== null ? (img.map((img) => <img key={img.image_id} 
                                                    className="ImageList__img"
                                                    src={img.src} 
                                                    alt={img.src}
                                                    onClick={ () => handleClick(img.image_id, true) } /> )) : <Spinner/> }
        </div>
    )
}