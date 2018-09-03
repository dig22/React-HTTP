# React-http-API
Simple React http API component
  
  ## Usage
```
import Api from './services/api/api';
...
```
```
var get = await Api.get('get_address' , ['param1','param2' ...] );
```
```
var post = await Api.post('post_address' , {data1 :'...' , data2 :'...'} );
```