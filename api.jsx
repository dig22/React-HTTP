import { Component } from 'react';

class Api extends Component {

  static getQuerySperator = "/";  //Set Default Sperator ? or / etc

  static baseAdress = window.location.href.indexOf("localhost") > -1 ?
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
    console.log(this.baseAdress + endpoint  + paramsString);
    const response = await fetch(this.baseAdress + endpoint  + paramsString);
    return await response.json();
  }

  /*
    Post with body 
    Note : Content Type is set to JSON (Change if required)
  */
  static async post(endpoint, body) {
    const response = await fetch(this.baseAdress + endpoint, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: body
    });
    return await response.json();
  }
}

export default Api;