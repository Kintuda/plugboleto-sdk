### Description

This is a very basic implementation for retrying http request upon failure.

### Features

 - Usage of promises instead of callback.
 - Can recursive try to send request.
 - Can add timeout between requests.

### Installation



Using npm
```
$ npm install --save plugboleto_lib
```
Using yarn
```
$ yarn add plugboleto_lib
```

### Example

Exemplo de utilização
```
const Boleto = require('../lib/Boleto')
const boleto = new Boleto('staging','01001001000113','f22b97c0c9a3d41ac0a3875aba69e5aa','01001001000113')
let remessa =  boleto.solicitarRemessa(['HyZEXKtP_g']).then(res=>console.log(res))


```


### Dependencies

Única dependência do projeto é o pacote axios

### License

MIT