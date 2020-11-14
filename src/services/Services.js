const Services = {

    /**
     * Базовый url
     */
    _baseUrl: 'https://tzfrontend.herokuapp.com',

    /**
     * Все данные
     */
    getResource: async function (url) {
        const res = await fetch(`${this._baseUrl}${url}`);

        return await res.json()
    },

    
    /**
     * Добавление коммента к изображению
     */
    addComment: async function (name, description, image_id) {

        const res = await fetch(`${this._baseUrl}/comments/add/`, {
            'method':'POST',
            'headers': {
                'accept': 'application/json',
                'Content-Type': 'application/json',
            },
            'body': `{"name":"${name}","description":"${description}","image_id":${image_id}}`,
        })
        return await res.json()
    },

    /**
     * Все изображения
     */
    getAllImages: async function () {
        return await this.getResource('/images/')
    },

    /**
     * Изображение большего размера
     */
    getImage: async function (id) {
        return await this.getResource(`/images/${id}`)
    },

    /**
     * Получение списка комментов к изображению
     */
    getComments: async function (id) {
        const comment = await this.getResource(`/comments/${id}`)

        return this._transformComments(comment, id);
    },

    /**
     * Чуток переделать ответ сервера
     */
    _transformComments: function (comments, id) {
        if (comments.detail) return [{
            description: comments.detail,
            name: '',
            id: 0,
            image_id: id,
        }]; 
        else {
            return comments;
        }
    },
}

export default Services;

// Services.getAllImages().then(img => console.log(img));
// Services.getImage(3).then(img => console.log(img));
// Services.getComments(3).then(img => console.log(img));
// Services.addComment().then(res => console.log(res));

