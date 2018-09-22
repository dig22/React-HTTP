import { Component } from 'react';

class Api extends Component {

    static getQuerySperator = "/";  //Set Default Sperator ? or / etc

    constructor() {
        super();
    }

    /*
      Get with params
    */
    static async get(endpoint, params) {

        var paramsString = "";
        if (params) {
            params.forEach(element => {
                paramsString += this.getQuerySperator + element;
            });
        }
        console.log( endpoint + paramsString);
        let response = await fetch( endpoint + paramsString);
        return await response.json();
    }

    /*
      Post with body 
      Note : Content Type is set to JSON (Change if required)
    */
    static async post(endpoint, _body) {
        console.log(_body);
        let response = await fetch(endpoint, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(_body),
        });
        return await response.json();
    }
}

export default Api;