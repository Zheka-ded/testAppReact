import './Modal.css';

import Services from '../../services/Services';
import { useEffect, useState } from 'react';

export default function Modal (props) {

    const { id, closeModal } = props;

    const [img, setImg] = useState(null);
    const [comment, setComment] = useState(null);

    useEffect(() => {
        Services.getImage(id).then(img => setImg(img.src))
        Services.getComments(id).then(comment => setComment(comment))
    },[])

    console.log(id)
    console.log(img)
    console.log(comment)
    

    return(
        <div className="Modal__wrap">
           {img !== null ?  <div className="Modal">

                <button onClick={() => closeModal(false)} >X</button>

                <img className="Modal__img" src={img} alt={img} />
                { comment !== null ? comment.map(comment => <p key={comment.id} > {comment.name} - {comment.description} </p>) : null}

            </div> : <h1>Spinner;&#41;</h1>}
        </div>
    )
}