import './Form.css';

export default function Form (props) {
    /**
     * props submit передача данных формы на сервер
     */
    const { submit } = props;
    /**
     * Обработка формы
     */
    function handleSubmit(event){
        event.preventDefault();
        let name = event.target.user_name;
        let description = event.target.description;
        
        if(name.value === '' || description.value === '') {
            alert('Заполните поля формы')
        } else {
            submit(name.value, description.value)
        };

        name.value = '';
        description.value = '';
    }
    return(
            <form className="Form" onSubmit={handleSubmit} >
                <input className="Form__input" name="user_name" type="text" placeholder="Ваше имя" />
                <input className="Form__input" name="description" type="text" placeholder="Ваш комментарий" />
                <input className="Form__input" type="submit" value="Оставить комментарий"/>
            </form>
    )
}