import { Component } from 'react';

class Api extends Component {

    static getQuerySperator = "/";  //Set Default Sperator ? or / etc

    static baseAddress = window.location.href.indexOf("localhost") > -1 ?
        "http://localhost:60001/StoreFront/" : "https://api.2paws.xyz/StoreFront/";  //Default API address

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
        console.log(this.baseAddress + endpoint + paramsString);
        let response = await fetch(this.baseAddress + endpoint + paramsString);
        return await response.json();
    }

    /*
      Post with body 
      Note : Content Type is set to JSON (Change if required)
    */
    static async post(endpoint, _body) {
        console.log(_body);
        let response = await fetch(this.baseAddress + endpoint, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(_body)
        });
        return await response.json();
    }
}

export default Api;