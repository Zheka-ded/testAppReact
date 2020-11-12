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
    // addComment: async function () {

    //     const res = await fetch(`${this._baseUrl}/comments/add/`, {
    //         'method':'POST',
    //         'headers': {
    //             'accept': 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         'body': 'name=stringstringstring&description=stringstringstring&image_id=3'
    //     })
    //     return await res.json()
    //     // return await this.getResource(`/comments/add${id}`)
    // },

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
        return await this.getResource(`/comments/${id}`)
    },
}

export default Services;

// Services.getAllImages().then(img => console.log(img));
// Services.getImage(3).then(img => console.log(img));
// Services.getComments(3).then(img => console.log(img));
// Services.addComment().then(res => console.log(res));

