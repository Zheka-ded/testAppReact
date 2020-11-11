// import React from 'react';

export default class Services{

    _baseUrl = 'https://tzfrontend.herokuapp.com';

    getResource = async (url) => {
        const res = await fetch(`${this._baseUrl}${url}`);

        return await res.json()
    }

    getAllImages = async () => {
       const res = await this.getResource('/images/');

       return res;
    };
}

const x = new Services();

x.getAllImages().then(img => console.log(img));

// console.log(x)