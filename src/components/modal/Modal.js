import './Modal.css';

import Services from '../../services/Services';
import { useEffect, useState } from 'react';
import Spinner from '../spinner/Spinner';
import Form from '../form/Form';

export default function Modal (props) {

    const { id, closeModal } = props;

    const [img, setImg] = useState(null);
    const [comment, setComment] = useState(null);
    
    const [count, setCount] = useState(0)

    useEffect(() => {
        Services.getImage(id).then(img => setImg(img.src))
        Services.getComments(id).then(comment => setComment(comment))
    },[count, id])

    function newComment (name, description) {
        Services.addComment(name, description, id);
        setCount(count + 1);
    }
    

    const printComments = (comment) => (
        comment !== null ? (comment.map(comment => <p key={comment.id} > {comment.name} {comment.description} </p>)) : <Spinner/>
    )

    return(
        <div className="Modal__wrap">
            {img !== null ?  <div className="Modal">

                <button onClick={() => closeModal(false)} >X</button>

                <img className="Modal__img" src={img} alt={img} />

                { printComments(comment) }

                <Form submit={newComment} />

            </div> : <Spinner/>}
        </div>
    )
}