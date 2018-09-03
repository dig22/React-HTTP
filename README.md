# React/JSX HTTP API
Simple React http API component
  
  [![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://paypal.me/dig22)
## Add submodule
```
git submodule add git@github.com:dig22/React-http-API.git ./src/services/api/
```
Import in App.js or App.jsx
```
import Api from './services/api/api';
...
```
  ## Usage
```
var get = await Api.get('get_address' , ['param1','param2' ...] );
```
```
var post = await Api.post('post_address' , {data1 :'...' , data2 :'...'} );
```  
  
  ## Donation
If this project helped, you can always buy me a cup of coffee :) 

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://paypal.me/dig22)