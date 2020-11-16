import './Modal.css';

import Services from '../../services/Services';
import { useEffect, useState } from 'react';

import Spinner from '../spinner/Spinner';
import Form from '../form/Form';

export default function Modal (props) {
    /**
     * props id изображения и функция закрытия модалки
     */
    const { id, closeModal } = props;
    /**
     * Изображение которое прилитает с сервера
     */
    const [img, setImg] = useState(null);
    /**
     * Комменты к изображению
     */
    const [comment, setComment] = useState(null);
    /**
     * Да это костыль который помогает обновлять комменты после их добавления
     */
    const [count, setCount] = useState(0)

    useEffect(() => {
        Services.getImage(id).then(img => setImg(img.src))
        Services.getComments(id).then(comment => setComment(comment))
    },[count, id])
    /**
     * Передает на сервер строку с комментом и обновляем count для перересовки комментов
     */
    function newComment (name, description) {
        Services.addComment(name, description, id);
        setCount(count + 1);
    }
    /**
     * Отрисовка комментов
     */
    const printComments = (comment) => (
        comment !== null ? (comment.map(comment => <p className="Modal__comments" 
                                                    key={comment.id} > <span>{comment.name}</span><br/>{comment.description} </p>)) : <Spinner/>
    )

    return(
        <div className="Modal__wrap">
            {img !== null ?  <div className="Modal">
                <div className="Modal__item">
                    <button className="Modal__close" 
                            onClick={() => closeModal(false)} >&#10005;</button>
                            
                    <img className="Modal__img" src={img} alt={img} />
                    
                    <div className="Modal__comments-wrap">
                        { printComments(comment) }
                    </div>
                </div>

                <Form submit={newComment} />

            </div> : <Spinner/>}
        </div>
    )
}