import React, { useEffect, useState } from 'react';
import Services from '../../services/Services';

export default function ImageList () {

    const [img, setImg] = useState(null)
    
    useEffect(() => {
        Services.getAllImages().then(img => setImg(img));
    }, [])

    console.log(img)
    return(
        <>
            { img !== null ? (img.map((img) => <img key={img.image_id} src={img.src} onClick={() => console.log(img.image_id)} /> )) : ''}
        </>
    )
}